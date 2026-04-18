import * as React from 'react';
import { Suspense, useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Stage, Html, useProgress, OrbitControls, ContactShadows, MeshReflectorMaterial, Environment, SpotLight } from '@react-three/drei';
import { AlertTriangle, X, Eye, EyeOff, CircleDot, ChevronLeft, Lock, ChevronRight, Sun, Moon, Lightbulb, LightbulbOff } from 'lucide-react';
import * as THREE from 'three'; 
import { Center } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { CAR_MODEL_CONFIGS } from '../configs/carModels';
import { audiEngineProfiles } from '../data/carDatabase/brands/audi/engineprofiles';
import { bmwEngineProfiles } from '@/data/carDatabase/brands/bmw/engineprofiles';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 border-4 border-t-red-600 border-white/20 rounded-full animate-spin" />
        <div className="text-white/80 font-mono text-xs font-bold tracking-widest">{progress.toFixed(0)}% LOADING</div>
      </div>
    </Html>
  );
}


// --- FÉNYLŐ TEXTÚRA (GLOW EFFEKT) - ENHANCED FOR REALISTIC LIGHTING ---
function useGlowTexture(color: string, intensity: number = 1.0) {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const center = 128;
      const maxRadius = 128;
      
      // Convert hex to RGB
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      // Create a more realistic glow with multiple gradient stops
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, maxRadius);
      
      // Core bright area - full intensity
      gradient.addColorStop(0, color); 
      gradient.addColorStop(0.15, color); 
      
      // Bright glow area
      gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${0.9 * intensity})`);
      
      // Medium glow
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${0.5 * intensity})`);
      
      // Soft outer glow
      gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${0.2 * intensity})`);
      
      // Fade to transparent
      gradient.addColorStop(1, 'rgba(0,0,0,0)'); 
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [color, intensity]);
}

// --- SHOWROOM PADLÓ ---
function ShowroomFloor({ isNightMode, yOffset = 0, width = 5, length = 10 }: { isNightMode: boolean, yOffset?: number, width?: number, length?: number }) {
    // A padló mérete legyen az autó hosszának 20-szorosa, de minimum 100 egység.
    // Ez megoldja, hogy a nagy modelleknél is végtelennek tűnjön a padló.
    const floorSize = Math.max(100, Math.max(width, length) * 20);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, yOffset - 0.01, 0]}>
      <planeGeometry args={[floorSize, floorSize]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={isNightMode ? 0 : 50} 
        roughness={isNightMode ? 1 : 0.8}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color={isNightMode ? "#020202" : "#1a1a1a"}
        metalness={isNightMode ? 0 : 0.5}
        mirror={isNightMode ? 0 : 0.5}
      />
    </mesh>
  );
}

interface Hotspot3D {
  x: number;
  y: number;
  z: number;
  label: string;
  details: string;
  critical?: boolean;
}

// --- A. OPCIÓ: PONTOS FÉNYEK (Ha találtunk lámpát a modellben) - ENHANCED ---
function ExactCarLights({ lights, taillights, drllight, isNightMode, carBounds, lightSettings, forwardDir = 1, floorOffset = 0 }: any) {
  if (!isNightMode) return null;

  // 1. DINAMIKUS MÉRET SZÁMÍTÁSA (Univerzális minden modellhez)
  // Biztosítjuk, hogy megtalálja a méreteket, bárhogy is hívják a változóban (x/z vagy width/length)
  const sizeX = carBounds?.x || carBounds?.width || 1.8;
  const sizeZ = carBounds?.z || carBounds?.length || 4.5;

  
  
  // Az autó fizikai hossza mindig a nagyobb kiterjedés
  const carLength = Math.max(sizeX, sizeZ);
  
  // Ebből tudjuk meg 100% pontossággal, merre áll az autó
  const isXLonger = sizeX > sizeZ; 

  // --- DINAMIKUS SZORZÓK (Nem fix számok!) ---
  // A kiindulási pontot épphogy csak kiléptetjük a fényszóró anyagából (az autó hosszának 1.5%-a)
  const dynFrontOffset = carLength * 0.01; 
  // A fénypaca a földön az autó hosszának 3.5-szeresénél legyen a legerősebb
  const dynBeamDistance = lightSettings?.headlightTargetDistance ?? (carLength * 3.5);
  // A fény maximális hatótávja az autó hosszának 12-szerese
  const dynLightDistance = lightSettings?.headlightDistance ?? (carLength * 12);  
  const beamPenumbra = lightSettings?.headlightPenumbra ?? 0.8;
  
  // Use custom value if provided, otherwise default to 1800
  const beamAngle = lightSettings?.headlightAngle ?? 0.45;
  const beamIntensity = lightSettings?.headlightIntensity ?? 4000;
  const beamOpacity = lightSettings?.headlightOpacity ?? 0.8;
  const beamRadiusTop = lightSettings?.headlightRadiusTop;

  // 2. HAJSZÁLPONTOS KIINDULÁSI PONT (Egyenesen a mesh-ből)
  const getOffsetPosition = (lightPos: THREE.Vector3) => {
      if (!lightPos) return new THREE.Vector3(0,0,0);
      const pos = lightPos.clone(); // Ez a MESH pontos közepe!
      
      // Csak azon a tengelyen toljuk ki minimálisan, amerre az autó néz,
      // hogy ne akadjon el a 3D modell burkolatában a fény
      if (isXLonger) {
          pos.x += dynFrontOffset * forwardDir;
      } else {
          pos.z += dynFrontOffset * forwardDir;
      }
      return pos;
  };

  // 3. CÉLPONT KISZÁMÍTÁSA (Padlóra vetítve, pontosan előre)
  const getTargetPosition = (lightPos: THREE.Vector3): [number, number, number] => {
    if (!lightPos) return [0, 0, 0];
      const targetY = floorOffset; // Pontosan a padló szintje
      
      if (isXLonger) {
          return [lightPos.x + (dynBeamDistance * forwardDir), targetY, lightPos.z];
      } else {
          return [lightPos.x, targetY, lightPos.z + (dynBeamDistance * forwardDir)];
      }
  };

  return (
    <group>
        {/* --- DRL LIGHTS --- */}
        {/* Maga a 3D anyag világít emissive-vel */}

        {/* --- HEADLIGHTS --- */}
        {lights && lights.left && (
            <SpotLight
            position={getOffsetPosition(lights.left)}
            target-position={getTargetPosition(lights.left)}
            angle={beamAngle} 
            penumbra={beamPenumbra}
            distance={dynLightDistance}
            attenuation={4}
            anglePower={5} 
            intensity={beamIntensity}
            color="#ffffff" 
            opacity={beamOpacity}
            radiusTop={beamRadiusTop}
        >
                {/* Properly attaching the target to the scene graph */}
                <object3D attach="target" position={getTargetPosition(lights.left)} />
            </SpotLight>
        )}
        {lights && lights.right && (
            <SpotLight
            position={getOffsetPosition(lights.right)}
            target-position={getTargetPosition(lights.right)}
            angle={beamAngle} 
            penumbra={beamPenumbra}
            distance={dynLightDistance}
            attenuation={4}
            anglePower={5} 
            intensity={beamIntensity}
            color="#ffffff" 
            opacity={beamOpacity}
            radiusTop={beamRadiusTop}
        >
                {/* Properly attaching the target to the scene graph */}
                <object3D attach="target" position={getTargetPosition(lights.right)} />
            </SpotLight>
        )}

        {/* --- TAILLIGHTS --- */}
    </group>
  );
}

// --- B. OPCIÓ: UNIVERZÁLIS FÉNYEK (Fallback - Ha nem találtunk lámpát) - ENHANCED ---
function UniversalCarLights({ 
    carBounds, 
    isNightMode,
    activeProfile,
    rotation = [0, 0, 0] 
}: { 
    carBounds: { width?: number, length?: number, height?: number, forwardDir: number },
    isNightMode: boolean,
    activeProfile: any,
    rotation?: [number, number, number] 
}) {
  const frontGlow = useGlowTexture('#D4EBFF', 1.2);
  const rearGlow = useGlowTexture('#FF2200', 1.1);

  if (!isNightMode) return null;

  const manual = activeProfile?.manualLightPositions?.headlights;

    
    const zFrontLocal = (carBounds.length / 2) * carBounds.forwardDir;
    const xSideLocal = carBounds.width / 2.8; // Kicsit beljebb húzzuk a szélességnél
    const yHeight = carBounds.height * 0.45;

    const leftLightPos = new THREE.Vector3(xSideLocal, yHeight, zFrontLocal);
    const rightLightPos = new THREE.Vector3(-xSideLocal, yHeight, zFrontLocal);
    const targetPos = new THREE.Vector3(0, 0, zFrontLocal + (10 * carBounds.forwardDir)); // A fény célpontja (távolabb)

    const euler = new THREE.Euler(...rotation);
    leftLightPos.applyEuler(euler);
    rightLightPos.applyEuler(euler);
    targetPos.applyEuler(euler);
  
  // Ensure we have valid bounds, use defaults if not available
  if (!carBounds.width || !carBounds.length || !carBounds.height) {
    // Use reasonable defaults based on typical car dimensions
    const defaultWidth = 1.8;
    const defaultLength = 4.5;
    const defaultHeight = 1.5;
    const defaultForwardDir = carBounds.forwardDir || 1;
    
    return (
        <group>
           {/* Bal első lámpa */}
           <SpotLight 
             position={leftLightPos} 
             target-position={targetPos}
             angle={0.6} 
             penumbra={0.5} 
             intensity={80} 
             distance={20} 
             color="#ffffff" 
             castShadow 
           />
           {/* Jobb első lámpa */}
           <SpotLight 
             position={rightLightPos} 
             target-position={targetPos}
             angle={0.6} 
             penumbra={0.5} 
             intensity={80} 
             distance={20} 
             color="#ffffff" 
             castShadow 
           />
        </group>
     );
  }

  const { width = 1.8, length = 4.5, height = 1.5, forwardDir = 1 } = carBounds;


  // Matematikai pozíciók (sarkok) - improved positioning
  const lampX = manual?.x ?? (width / 2) * 0.85; 
  const lampY = manual?.y ?? ((-height / 2) + (height * 0.60));
  const tailY = (-height / 2) + (height * 0.65); 
  // FONTOS: Kicsit kijjebb toljuk (0.15), hogy ne lógjon bele a BMW lökhárítójába
  const frontZ = ((length / 2) * forwardDir) + (0.15 * forwardDir); 
  const rearZ = ((length / 2) * -forwardDir) - (0.15 * forwardDir);

  const beamDist = 35;
  const beamDrop = -8;

  return (
    <group>
        {/* ELSŐ FÉNYSZÓRÓK - Light only, no visible sprites */}
        <SpotLight 
            position={[-lampX, lampY, frontZ]} 
            target-position={[-lampX, beamDrop, frontZ + (beamDist * forwardDir)]}
            angle={0.55} 
            penumbra={0.5} 
            distance={60} 
            attenuation={4} 
            anglePower={6} 
            intensity={300} 
            color="#D4EBFF" 
            opacity={0.6} 
        />

        <SpotLight 
            position={[lampX, lampY, frontZ]} 
            target-position={[lampX, beamDrop, frontZ + (beamDist * forwardDir)]}
            angle={0.55} 
            penumbra={0.5} 
            distance={60} 
            attenuation={4} 
            anglePower={6} 
            intensity={300} 
            color="#D4EBFF" 
            opacity={0.6} 
        />

        {/* HÁTSÓ LÁMPÁK - Light only, no visible sprites */}
        <pointLight position={[-lampX, tailY, rearZ]} intensity={12} distance={4} color="#FF2200" decay={2.5} />

        <pointLight position={[lampX, tailY, rearZ]} intensity={12} distance={4} color="#FF2200" decay={2.5} />
    </group>
  );
}

// --- KAMERA VEZÉRLŐ ---
function CameraController({ activeSpot, hotspots, modelRadius, modelRef }: { activeSpot: number | null, hotspots?: Hotspot3D[], modelRadius: number, modelRef: React.RefObject<THREE.Group> }) {
  const { camera, controls } = useThree();
  const targetVec = useRef(new THREE.Vector3(0, 0, 0)); 
  const cameraPosVec = useRef(new THREE.Vector3(0, 2, 6)); 
  const [isAnimating, setIsAnimating] = useState(false);
  const lastSpot = useRef(activeSpot);

  useEffect(() => {
    if (activeSpot !== lastSpot.current) {
      lastSpot.current = activeSpot;
      
      if (activeSpot !== null && hotspots && hotspots[activeSpot]) {
        const spot = hotspots[activeSpot];
        
        // 1. ÁTVÁLTÁS VILÁGKOORDINÁTÁRA
        // A hotspot a kicsinyített modell belső terében van. Ezt átszámoljuk a valós világba:
        const worldPos = new THREE.Vector3(spot.x, spot.y, spot.z);
        const centerWorld = new THREE.Vector3(0, 0, 0);
        
        if (modelRef && modelRef.current) {
            modelRef.current.localToWorld(worldPos);
            
            // Megkeressük az autó TÉNYLEGES fizikai közepét a térben
            const box = new THREE.Box3().setFromObject(modelRef.current);
            box.getCenter(centerWorld);
        }

        // 2. CÉLPONT (A te eredeti UI eltolás logikád!)
        const isTop = worldPos.y > 0.3;
        const verticalOffset = isTop ? -(modelRadius * 0.20) : (modelRadius * 0.20); 
        targetVec.current.copy(worldPos);
        targetVec.current.y += verticalOffset;

        // 3. KAMERA IRÁNYA ÉS POZÍCIÓJA
        // A Varázslat: Kivonjuk az autó közepét a hotspotból. 
        // Ez egy olyan nyílvesszőt hoz létre, ami az autó közepéből fixen KIFELÉ (a hotspot felé) mutat!
        let direction = worldPos.clone().sub(centerWorld).normalize();
        
        if (direction.length() < 0.1) direction.set(0, 0.5, 1).normalize();

        // Okos Magasság (Ne menjen a padló alá)
        direction.y = Math.max(0.4, Math.abs(direction.y)); 
        direction.normalize();

        const isMobile = window.innerWidth < 768;
        const multiplier = isMobile ? 4.2 : 2.7;
        const distance = Math.max(modelRadius * multiplier, 2.5); 
        
        // A kamerát letesszük a hotspotra, és kitoljuk ezen a "kifelé" mutató vonalon
        cameraPosVec.current.copy(worldPos).add(direction.multiplyScalar(distance));
        
        if (cameraPosVec.current.y < 0.6) {
            cameraPosVec.current.y = 1.0; 
        }

        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 2000);
        return () => clearTimeout(timer);
      } else {
        targetVec.current.set(0, 0, 0);
      }
    }
  }, [activeSpot, hotspots, modelRadius, modelRef]);

  useFrame((state, delta) => {
    // @ts-ignore
    if (!controls) return;
    // @ts-ignore
    controls.target.lerp(targetVec.current, 4 * delta);
    if (isAnimating && activeSpot !== null) {
        camera.position.lerp(cameraPosVec.current, 3 * delta);
    }
  });
  
  return null;
}


// --- MODELL KOMPONENS ---
function Model({ path, hotspots, showHotspots, activeSpot, hotspotSettings, setActiveSpot, setIsHoveringHotspot, scale = 1, rotation = [0, 0, 0], setCalculatedMinDistance, setCalculatedMaxDistance, isHeadlightOn = true, setModelRadius, onModelLoaded, isNightMode, isMobile, forcedForwardDir, setDetectedHeadlights, setDetectedTaillights, setDetectedDrllight, customLightNames, manualLightPositions, activeProfile }: any) {
  const { scene } = useGLTF(path, '/draco/') as any;
  const modelRef = useRef<THREE.Group>(null);
  const [loadStage, setLoadStage] = useState(0); // 0: Start, 1: Mesh Ready, 2: Shaders Ready
  const [smartHotspots, setSmartHotspots] = useState<Hotspot3D[]>([]);
  const [modelRadiusState, setModelRadiusState] = useState(4);
  const activeManualLights = activeProfile?.manualLightPositions;
  const fileName = (path.split('/').pop() || "").split('?')[0];

  useEffect(() => {
    console.log("=== LIGHT DETECTION DATA ===");
    console.log("Custom Light Names received:", customLightNames);
}, [customLightNames]);
  useMemo(() => {
    if (!scene) return;
    
    // --- EZT ADD HOZZÁ: LISTÁZÁS ---
    console.log("=== 🔍 MODELL ALKATRÉSZEK LISTÁJA ===");
    
    scene.traverse((child: any) => {
       if (child.isMesh) {
          // KIÍRJUK MINDEN MESH NEVÉT:
          console.log(`- "${child.name}"`); 
          
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material && (child.name.toLowerCase().includes('glass') || child.name.toLowerCase().includes('window'))) {
              child.material.transparent = true;
              child.material.opacity = 0.3;
          }
       }
    });
    console.log("=====================================");
 }, [scene]);
 


 useEffect(() => {
  if (!scene || !modelRef.current) return;
  
  modelRef.current.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(modelRef.current);
  const size = new THREE.Vector3();
  box.getSize(size);
  // Check if the car is aligned along the X or Z axis
  const isXLonger = size.x > size.z;

  const headCenters: THREE.Vector3[] = [];
  const tailCenters: THREE.Vector3[] = [];
  const drlCenters: THREE.Vector3[] = [];

  console.log("=== 🔍 EXACT LIGHT SEARCH STARTING ===");

  // OPTIMIZATION: Read profile values only once before the loop
  const drlGlow = activeProfile?.lightSettings?.meshGlowDrl ?? 5;
  const headGlow = activeProfile?.lightSettings?.meshGlowHeadlight ?? 10;
  const tailGlow = activeProfile?.lightSettings?.meshGlowTaillight ?? 8;

  scene.traverse((child: any) => {
    if (child.isMesh) {
      const meshName = (child.name || "").toLowerCase();

      const processLight = (names: string[] | undefined, targetArray: THREE.Vector3[], emissiveHex: string, nightIntensity: number, offIntensity: number, lightType: string) => {
          // If names array is empty or undefined, skip processing
          if (!names || !Array.isArray(names) || names.length === 0) return;
          
          let matched = false;

          if (child.material) {
              if (Array.isArray(child.material)) {
                 child.material = child.material.map((m: any) => {
                     const mName = (m.name || "").toLowerCase();
                     const isThisMatMatching = names.some(n => 
                      mName.includes(n.toLowerCase()) || 
                      meshName.includes(n.toLowerCase())
                  );
                     
                     if (isThisMatMatching) {
                         matched = true;
                         const newM = m.clone();
                         newM.emissive = new THREE.Color(emissiveHex);
                         newM.emissiveIntensity = isNightMode ? nightIntensity : offIntensity;
                         newM.toneMapped = false;
                         newM.needsUpdate = true;
                         return newM;
                     }
                     return m;
                 });
              } else {
                 const mName = (child.material.name || "").toLowerCase();
                 // BUG FIX: Using .includes() instead of strict === equality
                 const isThisMatMatching = names.some(n => 
                     mName.includes(n.toLowerCase()) || 
                     meshName.includes(n.toLowerCase())
                 );
                 
                 if (isThisMatMatching) {
                     matched = true;
                     child.material = child.material.clone();
                     child.material.emissive = new THREE.Color(emissiveHex);
                     child.material.emissiveIntensity = isNightMode ? nightIntensity : offIntensity; 
                     child.material.toneMapped = false;
                     child.material.needsUpdate = true;
                 }
              }
          }

          if (matched) {
              console.log(`✅ EXACT MATCH (${lightType}):`, child.name);
              child.castShadow = false;

              const childBox = new THREE.Box3().setFromObject(child);
              const childCenter = new THREE.Vector3();
              const childSize = new THREE.Vector3();
              childBox.getCenter(childCenter);
              childBox.getSize(childSize);
              
              // If element is wider than 0.8m, it's a combined left-right mesh
              const isCombinedMesh = isXLonger ? childSize.z > 0.8 : childSize.x > 0.8;

              if (isCombinedMesh) {
                  console.log(`⚠️ Combined ${lightType} mesh detected! Splitting into left and right.`);
                  const leftPos = childCenter.clone();
                  const rightPos = childCenter.clone();
                  
                  const offset = isXLonger ? (childSize.z / 2) * 0.8 : (childSize.x / 2) * 0.8;

                  if (isXLonger) {
                      leftPos.z -= offset;
                      rightPos.z += offset;
                  } else {
                      leftPos.x -= offset;
                      rightPos.x += offset;
                  }
                  targetArray.push(leftPos, rightPos);
              } else {
                  targetArray.push(childCenter);
              }
          }
      };

      processLight(customLightNames?.drllight, drlCenters, '#ffffff', drlGlow, 2, "DRL");
      processLight(customLightNames?.headlights, headCenters, '#ffffff', isHeadlightOn ? headGlow : 0, 0, "HEADLIGHT"); 
      processLight(customLightNames?.taillights, tailCenters, '#ff0000', tailGlow, 0, "TAILLIGHT");
    }
  });

  console.log(`Result: ${drlCenters.length} DRL, ${headCenters.length} Headlight, ${tailCenters.length} Taillight.`);

  // Sort the matched centers based on car orientation
  const sortLeftRight = (centers: THREE.Vector3[]) => {
    if (centers.length >= 2) {
      if (isXLonger) {
          centers.sort((a, b) => a.z - b.z); 
      } else {
          centers.sort((a, b) => a.x - b.x); 
      }
      return { left: centers[0], right: centers[centers.length - 1] };
    } else if (centers.length === 1) {
      return { left: centers[0], right: centers[0] };
    }
    return null;
  };

  if (setDetectedHeadlights) setDetectedHeadlights(sortLeftRight(headCenters));
  if (setDetectedTaillights) setDetectedTaillights(sortLeftRight(tailCenters));
  if (setDetectedDrllight) setDetectedDrllight(sortLeftRight(drlCenters));

}, [scene, customLightNames, isNightMode, setDetectedHeadlights, isHeadlightOn, setDetectedTaillights, setDetectedDrllight, activeProfile]);

  // --- HOTSPOT SZÁMÍTÁS ---
  useEffect(() => {
    if (!modelRef.current || !scene) return;
    modelRef.current.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(modelRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    console.log("=== 3D MODEL REAL SIZE ===");
    console.log(`File: ${path}`);
    console.log(`Width (X): ${size.x.toFixed(2)}`);
    console.log(`Height (Y): ${size.y.toFixed(2)}`);
    console.log(`Length (Z): ${size.z.toFixed(2)}`);
    console.log("===============================");
    
    let frontCount = 0; let frontZSum = 0;
    modelRef.current.traverse((child) => {
         if (child.name.includes('grill') || child.name.includes('headlight')) {
             const p = new THREE.Vector3(); child.getWorldPosition(p);
             frontZSum += p.z; frontCount++;
         }
    });
    let forwardDir = -1;
    if(frontCount > 0) forwardDir = (frontZSum / frontCount) > center.z ? 1 : -1;

    // Report size to parent immediately so the floor can be positioned correctly
    if (size.x > 0 && onModelLoaded) {
        onModelLoaded({ 
            width: size.x, 
            height: size.y, 
            length: size.z, 
            forwardDir: forcedForwardDir !== undefined ? forcedForwardDir : forwardDir 
        });
    }

    // Camera limits based on model size
    const sphere = new THREE.Sphere();
    box.getBoundingSphere(sphere);
    if (sphere.radius > 0) {
        setModelRadiusState(sphere.radius);
        if (setModelRadius) setModelRadius(sphere.radius);
        const isMobileCheck = window.innerWidth < 768;
        
        // --- NEW: PROFILE-BASED CAMERA ZOOM LIMITS ---
        // Alapértelmezett szorzó 1.2 (ha nincs megadva a profilban)
        const minZoomMultiplier = activeProfile?.cameraSettings?.minDistanceMultiplier ?? 1.2;
        const maxZoomMultiplier = activeProfile?.cameraSettings?.maxDistanceMultiplier ?? (isMobileCheck ? 4.5 : 3.5);

        const minDist = sphere.radius * minZoomMultiplier;
        const maxDist = sphere.radius * maxZoomMultiplier;
        
        if (setCalculatedMinDistance) setCalculatedMinDistance(minDist);
        if (setCalculatedMaxDistance) setCalculatedMaxDistance(maxDist);
    }
  }, [scene, scale, forcedForwardDir, path, activeProfile]);

  // --- 2. HOTSPOT CALCULATION ---
  useEffect(() => {
    if (!modelRef.current || !hotspots || hotspots.length === 0) {
        setSmartHotspots([]);
        return;
    }
    modelRef.current.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(modelRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const isZLongest = size.z > size.x;

    let frontCount = 0; let frontZSum = 0;
    modelRef.current.traverse((child) => {
         if (child.name.includes('grill') || child.name.includes('headlight')) {
             const p = new THREE.Vector3(); child.getWorldPosition(p);
             frontZSum += p.z; frontCount++;
         }
    });
    let forwardDir = -1;
    if(frontCount > 0) forwardDir = (frontZSum / frontCount) > center.z ? 1 : -1;

    const calculatedHotspots = hotspots.map((spot: Hotspot3D) => {
      // 1. MANUAL COORDINATES (Bypass)
      if (spot.x !== 0 || spot.y !== 0 || spot.z !== 0) {
          const manualPos = new THREE.Vector3(spot.x, spot.y, spot.z);
          if (modelRef.current) {
              modelRef.current.worldToLocal(manualPos);
          }
          return { 
              ...spot, 
              x: manualPos.x, 
              y: manualPos.y, 
              z: manualPos.z, 
              foundMesh: true 
          };
      }

      // 2. AI GENERATED (0,0,0 fallback)
      const labelLower = spot.label.toLowerCase();
      let targetPos = new THREE.Vector3(spot.x, spot.y, spot.z);
      let foundMesh = false;
      const searchTerms: Record<string, string[]> = {
        'brake': ['caliper', 'brake', 'disc', 'bremse'],
        'wheel': ['wheel', 'tire', 'rim', 'felge'],
        'headlight': ['headlight', 'lamp', 'light_front'],
        'exhaust': ['exhaust', 'muffler', 'pipe', 'tip'],
        'engine': ['engine', 'motor', 'cover', 'block', 'turbo', 'dpf', 'egr', 'pump', 'thermostat', 'water pump' , 'cooler', 'injector', 'valve', 'timing', 'belt', 'manifold'],
        'door': ['door_fl', 'door_front'],
        'mirror': ['mirror'],
        'grill': ['grill', 'kidney', 'front_mesh', 'bumper_front'],
        'logo': ['logo', 'badge', 'emblem'],
        'radiator': ['radiator', 'cooler', 'condenser', 'intake', 'grill', 'kidney', 'front_mesh'],
        'timing': [] 
      };
      
      let keywords: string[] = [];
      Object.keys(searchTerms).forEach(key => { 
          if (labelLower.includes(key)) keywords = [...keywords, ...searchTerms[key]]; 
      });
      
      if (keywords.length > 0) {
        let bestMatch: THREE.Object3D | null = null;
        scene.traverse((child: THREE.Object3D) => {
            const childName = child.name.toLowerCase();
            if (keywords.some(k => childName.includes(k))) {
               if ((child as THREE.Mesh).isMesh) bestMatch = child; else if (!bestMatch) bestMatch = child; 
            }
        });
        
        if (bestMatch) {
            const worldPos = new THREE.Vector3();
            (bestMatch as THREE.Object3D).getWorldPosition(worldPos);
             const matchBox = new THREE.Box3().setFromObject(bestMatch as THREE.Object3D);
             const meshCenter = new THREE.Vector3();
             matchBox.getCenter(meshCenter);
            if (labelLower.includes('radiator')) { worldPos.copy(meshCenter); }
            else if (labelLower.includes('wheel') || labelLower.includes('brake')) {
                 const meshSize = new THREE.Vector3(); matchBox.getSize(meshSize);
                 if (meshSize.x > 0) { worldPos.x += (meshCenter.x > 0 ? meshSize.x / 2 : -meshSize.x / 2); }
            } else { worldPos.copy(meshCenter); }
            if (modelRef.current) modelRef.current.worldToLocal(worldPos);
            targetPos.copy(worldPos);
            foundMesh = true;
        }
      }
      
      if (!foundMesh) {
         const fallbackPos = center.clone();
         if (labelLower.includes("radiator")) {
             if (isZLongest) fallbackPos.z += (size.z * 0.48) * forwardDir; else fallbackPos.x += (size.x * 0.48) * forwardDir; 
             fallbackPos.y -= size.y * 0.25; 
         } 
         else if (labelLower.includes("grill") || labelLower.includes("headlight") || labelLower.includes("logo")) {
             if (isZLongest) fallbackPos.z += (size.z * 0.48) * forwardDir; else fallbackPos.x += (size.x * 0.48) * forwardDir; 
             fallbackPos.y += size.y * 0.1; 
         } 
         else if (labelLower.includes("timing") || labelLower.includes("chain")) {
             if (isZLongest) fallbackPos.z += (size.z * 0.25) * forwardDir; fallbackPos.y -= size.y * 0.15; 
         }
         else if (labelLower.includes("engine") || labelLower.includes("hood")) {
             if (isZLongest) fallbackPos.z += (size.z * 0.30) * forwardDir; fallbackPos.y += size.y * 0.35;
         } 
         else if (labelLower.includes("exhaust") || labelLower.includes("trunk")) {
             if (isZLongest) fallbackPos.z -= (size.z * 0.48) * forwardDir; fallbackPos.y -= size.y * 0.25;
         } 
         else if (labelLower.includes("wheel") || labelLower.includes("brake")) {
             if (isZLongest) fallbackPos.z += (size.z * 0.35) * forwardDir; fallbackPos.x = center.x + (size.x * 0.45); fallbackPos.y -= size.y * 0.25;
         }
         if (modelRef.current) modelRef.current.worldToLocal(fallbackPos);
         targetPos.copy(fallbackPos);
      }
      return { 
        ...spot, 
        x: targetPos.x, 
        y: targetPos.y, 
        z: targetPos.z, 
        foundMesh 
      };
    });
    setSmartHotspots(calculatedHotspots);
  }, [scene, scale, hotspots]);
  

  const handlePrev = (e: any) => { e.stopPropagation(); if (!smartHotspots.length) return; const count = smartHotspots.length; setActiveSpot(activeSpot === null ? 0 : (activeSpot - 1 + count) % count); };
  const handleNext = (e: any) => { e.stopPropagation(); if (!smartHotspots.length) return; const count = smartHotspots.length; setActiveSpot(activeSpot === null ? 0 : (activeSpot + 1) % count); };

  return (
    <group>
      <Center>
      <primitive 
    ref={modelRef} 
    object={scene} 
    scale={scale} 
    rotation={rotation}
    setDetectedHeadlights={setDetectedHeadlights} // <-- ÚJ
    setDetectedTaillights={setDetectedTaillights} // <-- ÚJ
    setDetectedRdllight={setDetectedDrllight}
    onClick={(e: any) => {
      e.stopPropagation(); // Ne forogjon a kamera kattintáskor
      
      // 1. A PONTOS KATTINTÁS HELYE (Világkoordináta)
      const hitPoint = e.point;
      
      console.log("------------------------------------------------");
      console.log("🎯 CÉLZOTT KOORDINÁTÁK (Ezt másold be!):");
      console.log(`Elem neve: "${e.object.name}"`);
      
      // 2. FORMÁZOTT ADAT (X mindig pozitív legyen a szimmetria miatt)
      // A toFixed(2) két tizedesjegyre kerekít, ami bőven elég
      const coordinateData = {
          x: Number(Math.abs(hitPoint.x).toFixed(2)), 
          y: Number(hitPoint.y.toFixed(2)), 
          z: Number(hitPoint.z.toFixed(2))
      };
      
      console.log("manualLightPositions:");
      console.log(JSON.stringify(coordinateData, null, 2));
      console.log("------------------------------------------------");

      // 3. GYORS VISSZAJELZÉS
      window.alert(`KOORDINÁTÁK MÁSOLVA A KONZOLRA (F12)!\n\nX: ${coordinateData.x}\nY: ${coordinateData.y}\nZ: ${coordinateData.z}\n\nNyisd meg a konzolt és másold ki!`);
  }}
>
            {showHotspots && smartHotspots.map((spot: Hotspot3D, index: number) => {
                const isTop = spot.y > 0.3;
                let horizontalClass = '-translate-x-1/2'; 
                if (spot.x > 0.5) horizontalClass = '-translate-x-[90%]'; 
                else if (spot.x < -0.5) horizontalClass = '-translate-x-[10%]'; 
                return (
                    <group key={index} position={[spot.x, spot.y, spot.z]}>
                    <Html 
                        position={[0, 0, 0]}
                        zIndexRange={[100, 0]}
                        occlude={false} 
                        distanceFactor={hotspotSettings?.distanceFactor ?? Math.max(modelRadiusState * 2.2, 2)}
                        eps={0.001}
                        style={{ pointerEvents: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
                    >
                        <div 
                        className="relative flex flex-col items-center justify-center select-none" 
                        style={{ pointerEvents: 'auto' }} 
                        onMouseEnter={() => setIsHoveringHotspot(true)} 
                        onMouseLeave={() => setIsHoveringHotspot(false)}
                        >
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveSpot(activeSpot === index ? null : index); }}
                            className={`
                            relative flex items-center justify-center 
                            w-5 h-5 rounded-full border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                            transition-all duration-300 hover:scale-125 cursor-pointer outline-none focus:outline-none backdrop-blur-md
                            ${spot.critical ? 'bg-red-500/80' : 'bg-blue-500/80'}
                            ${activeSpot === index ? 'scale-125 ring-4 ring-white/20' : ''} 
                            `}
                        >
                            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
                        </button>

                        {activeSpot === index && (
                            <div 
                                className={`
                                    absolute w-72 p-0 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl text-left z-[100] 
                                    animate-in fade-in zoom-in-95 cursor-default select-text overflow-hidden
                                    ${isTop ? 'top-8 origin-top' : 'bottom-8 origin-bottom'}
                                    ${horizontalClass}
                                `}
                            >
                            <div className="flex justify-between items-center p-4 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent">
                                <h4 className={`font-bold text-sm flex items-center gap-2 uppercase tracking-wide ${spot.critical ? 'text-red-400' : 'text-blue-400'}`}>
                                    {spot.critical ? <AlertTriangle className="w-4 h-4" /> : <CircleDot className="w-4 h-4" />}
                                    {spot.label}
                                </h4>
                                <button onClick={(e) => { e.stopPropagation(); setActiveSpot(null); }} className="text-white/20 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
                            </div>
                            <div className="p-5 max-h-48 overflow-y-auto custom-scrollbar">
                                <p className="text-xs text-slate-300 leading-relaxed font-medium">{spot.details}</p>
                            </div>
                            <div className="flex items-center justify-between px-3 py-3 bg-black/40 border-t border-white/5">
                                <button onClick={handlePrev} className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white text-[10px] font-bold uppercase transition-colors"><ChevronLeft className="w-3 h-3 inline mr-1" /> Prev</button>
                                <div className="text-[10px] text-white/20 font-mono tracking-widest">{index + 1} / {smartHotspots.length}</div>
                                <button onClick={handleNext} className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white text-[10px] font-bold uppercase transition-colors">Next <ChevronRight className="w-3 h-3 inline ml-1" /></button>
                            </div>
                            </div>
                        )}
                        </div>
                    </Html>
                    </group>
                )
            })}
        </primitive>
        </Center>
      <CameraController activeSpot={activeSpot} hotspots={smartHotspots} modelRadius={modelRadiusState} modelRef={modelRef} />
    </group>
  );
}

// ----------------------
// EXPORT COMPONENT
// ----------------------
export default function Car3DViewer({ modelPath, hotspots, scale = 1, activeProfile: incomingProfile, rotation = [0, 0, 0], isPremium = false, onUnlock = () => {}, modelForwardDir, customLightNames }: { modelPath: string, hotspots?: Hotspot3D[], scale?: number, rotation?: [number, number, number], isPremium?: boolean, onUnlock?: () => void, modelForwardDir?: number, customLightNames?: { headlights?: string[], taillights?: string[] }, activeProfile?: any }) {
  const [showHotspots, setShowHotspots] = useState(isPremium);
  const [isHoveringHotspot, setIsHoveringHotspot] = useState(false);
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  const [calculatedMinDistance, setCalculatedMinDistance] = useState(2.5);
  const [calculatedMaxDistance, setCalculatedMaxDistance] = useState(12);
  const [modelRadius, setModelRadius] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isHeadlightOn, setIsHeadlightOn] = useState(true);
  const [detectedHeadlights, setDetectedHeadlights] = useState<{left: THREE.Vector3, right: THREE.Vector3} | null>(null);
  const [detectedTaillights, setDetectedTaillights] = useState<{left: THREE.Vector3, right: THREE.Vector3} | null>(null);
  const [detectedDrllight, setDetectedDrllight] = useState<{left: THREE.Vector3, right: THREE.Vector3} | null>(null);
  

  const activeProfile = useMemo(() => {
    if (incomingProfile) return incomingProfile;
  
    // Összefűzzük az Audi és BMW listákat egy közös keresőfelületté
    const allProfiles = [...audiEngineProfiles, ...bmwEngineProfiles];
  
    return allProfiles.find(p => {
      const dbFileName = p.model3DPath?.split('/').pop()?.toLowerCase();
      const currentFileName = modelPath.split('/').pop()?.toLowerCase();
      
      // Marad az eredeti szigorú feltétel: név egyezés ÉS author megléte
      return dbFileName === currentFileName && p.author; 
    });
  }, [incomingProfile, modelPath]);

  const authorCredit = activeProfile?.author
  const activeForwardDir = modelForwardDir ?? activeProfile?.modelForwardDir ?? 1;
  const activeManualLights = activeProfile?.manualLightPositions;

  const [activeLightNames, setActiveLightNames] = useState<any>(null);
  const isNightModeDisabled = activeProfile?.lightSettings?.disableNightMode === true || activeProfile?.disableNightMode === true;
  useEffect(() => {
    if (isNightModeDisabled && isNightMode) {
        setIsNightMode(false);
    }
}, [isNightModeDisabled, isNightMode]);
  
  // ITT VAN A CAR DATA DEFINÍCIÓJA BIZTOSAN A HELYÉN:
  const [carData, setCarData] = useState<{
      width?: number; 
      length?: number;
      height?: number; 
      forwardDir: number; 
      detectedLights?: { left: THREE.Vector3, right: THREE.Vector3 } | null;
      detectedTaillights?: { left: THREE.Vector3, right: THREE.Vector3 } | null;
      detectedAngelEyes?: { left: THREE.Vector3, right: THREE.Vector3 } | null;
  }>({ 
      height: 0, 
      forwardDir: 1, 
      detectedLights: null,
      detectedTaillights: null,
      detectedAngelEyes: null
  });

  useEffect(() => {
    if (isPremium) {
      setShowHotspots(true); // Ha megvette, kapcsoljuk be a hotspotokat
    } else {
      setShowHotspots(false); // Ha nincs, rejtsük el
      setIsNightMode(false);  // És kapcsoljuk le az éjszakai módot is
    }
  }, [isPremium]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const preventScroll = (e: WheelEvent) => { e.preventDefault(); };
    const canvasElement = document.getElementById('canvas-container');
    if (canvasElement) canvasElement.addEventListener('wheel', preventScroll, { passive: false });
    return () => { if (canvasElement) canvasElement.removeEventListener('wheel', preventScroll); };
  }, []);

  
  const formatManualLights = (pos: any) => {
    if (!pos) return null;
    return {
        left: new THREE.Vector3(Math.abs(pos.x), pos.y, pos.z),
        right: new THREE.Vector3(-Math.abs(pos.x), pos.y, pos.z)
    };
  };

  const floorOffset = -(carData.height / 2);

  return (
    <div 
      id="canvas-container"
      className={`w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden relative border shadow-2xl group touch-none transition-colors duration-1000 ${isNightMode ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black border-slate-800' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-200 to-gray-300 border-slate-200'}`}
    >
      <div className="absolute top-6 left-6 pointer-events-none z-10 select-none">
         <h1 className={`font-black text-6xl md:text-8xl tracking-tighter uppercase absolute -top-4 -left-2 mix-blend-overlay transition-colors duration-1000 ${isNightMode ? 'text-white/10' : 'text-black/5'}`}>Audi</h1>
         <div className="relative">
            <h2 className={`font-black text-2xl md:text-3xl tracking-tighter uppercase transition-colors duration-1000 ${isNightMode ? 'text-white' : 'text-slate-800'}`}>3D <span className="text-blue-500">View</span></h2>
            <p className="text-blue-400/60 text-[10px] font-mono tracking-[0.2em] mt-1">INTERACTIVE MODEL</p>
         </div>
      </div>

      <div className="absolute top-6 right-6 z-40 flex flex-col gap-3">
          
          {/* NIGHT MODE TOGGLE */}
          <div className="relative">
            <button 
                onClick={(e) => { 
                    e.stopPropagation(); 
                    if (!isPremium) onUnlock(); 
                    else if (!isNightModeDisabled) setIsNightMode(!isNightMode); 
                }} 
                className={`peer backdrop-blur-md border rounded-full p-2.5 transition-all flex items-center justify-center 
                    ${!isPremium || isNightModeDisabled
                        ? 'bg-slate-900/10 border-slate-900/20 text-slate-500 cursor-not-allowed opacity-60' 
                        : isNightMode 
                            ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30 hover:scale-110 cursor-pointer' 
                            : 'bg-slate-900/10 border-slate-900/20 text-slate-700 hover:bg-slate-900/20 hover:scale-110 cursor-pointer'
                    }`} 
            >
                {!isPremium ? <Lock className="w-5 h-5 opacity-70" /> : (isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>
            
            {/* Dinamikus Tooltip (Leírás) - Csak a gomb érintésére (peer-hover) jelenik meg! */}
            {(!isPremium || isNightModeDisabled) && (
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-bold rounded-lg opacity-0 peer-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-sm border border-white/10 z-50">
                    {!isPremium ? "Unlock Night Mode" : "Night Mode is currently not available"}
                </div>
            )}
          </div>

          {isPremium && isNightMode && (
              <div className="relative group animate-in fade-in slide-in-from-top-2 duration-300">
                  <button 
                      onClick={(e) => { e.stopPropagation(); setIsHeadlightOn(!isHeadlightOn); }} 
                      className={`backdrop-blur-md border rounded-full p-2.5 transition-all hover:scale-110 flex items-center justify-center 
                          ${isHeadlightOn 
                              ? 'bg-blue-500/20 border-blue-500/50 text-blue-400 hover:bg-blue-500/30' 
                              : 'bg-slate-900/60 border-slate-700/50 text-slate-500 hover:bg-slate-800/80'
                          }`} 
                  >
                      {isHeadlightOn ? <Lightbulb className="w-5 h-5" /> : <LightbulbOff className="w-5 h-5" />}
                  </button>
              </div>
          )}

          {/* HOTSPOT TOGGLE */}
          {hotspots && hotspots.length > 0 && (
            <div className="relative group">
                <button 
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        if (!isPremium) onUnlock();
                        else setShowHotspots(!showHotspots); 
                    }} 
                    className={`backdrop-blur-md border rounded-full p-2.5 transition-all hover:scale-110 flex items-center justify-center 
                        ${!isPremium 
                            ? 'bg-slate-900/10 border-slate-900/20 text-slate-500 hover:bg-slate-900/20' 
                            : isNightMode 
                                ? 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20' 
                                : 'bg-slate-900/10 border-slate-900/20 text-slate-700 hover:bg-slate-900/20'
                        }`} 
                >
                    {!isPremium ? <Lock className="w-5 h-5 opacity-70" /> : (showHotspots ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />)}
                </button>
                
                {/* Tooltip (Leírás) */}
                {!isPremium && (
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-sm border border-white/10">
                        Unlock Interactive Hotspots
                    </div>
                )}
            </div>
          )}
      </div>

      

      <Canvas 
        frameloop="demand"
        performance={{ min: 0.5, max: 1, debounce: 200 }}
        gl={{ 
          powerPreference: "high-performance",
          antialias: false
        }}
        dpr={[1, 1.5]} 
        shadows 
        camera={{ fov: 45, position: [0, 2, isMobile ? 9 : 6] }} 
        className="absolute inset-0 cursor-move outline-none" 
        tabIndex={-1}
      >
        <Suspense fallback={<Loader />}>

        
          
          <ambientLight intensity={isNightMode ? 0.05 : 0.8} />
          
          <Stage 
  environment={isNightMode ? "night" : "city"} 
  intensity={isNightMode ? 0.0 : 1} 
  shadows={false} 
  adjustCamera={false}
  center={{}} // Egyszerűen csak ennyi, TypeScript hiba nélkül
>
            {isNightMode && <Environment preset="night" blur={0.8} background={false} />}
            {!isNightMode && <Environment preset="city" blur={0.8} />}
            
            <Model 
              path={modelPath} 
              hotspots={hotspots} 
              scale={scale}
              rotation={rotation}
              showHotspots={showHotspots} 
              setIsHoveringHotspot={setIsHoveringHotspot}
              activeSpot={activeSpot}      
              setActiveSpot={setActiveSpot} 
              setCalculatedMinDistance={setCalculatedMinDistance}
              setCalculatedMaxDistance={setCalculatedMaxDistance}
              setModelRadius={setModelRadius}
              onModelLoaded={setCarData} 
              isMobile={isMobile}
              isNightMode={isNightMode}
              isHeadlightOn={isHeadlightOn}
              forcedForwardDir={activeForwardDir}
              customLightNames={customLightNames || activeProfile?.customLightNames}
              manualLightPositions={activeManualLights}
              setDetectedHeadlights={setDetectedHeadlights}
              setDetectedTaillights={setDetectedTaillights}
              setDetectedDrllight={setDetectedDrllight}
              hotspotSettings={activeProfile?.hotspotSettings}
              activeProfile={activeProfile}
            />
          </Stage>

          {/* FÉNYEK RENDERELÉSE - NINCS TÖBB DUPLIKÁCIÓ */}
          {(!isHoveringHotspot && activeSpot === null) && (
              (detectedHeadlights || detectedTaillights || detectedDrllight || activeManualLights) ? (
                  <ExactCarLights 
                     // ÚJ LOGIKA: Ha a lámpa ki van kapcsolva, null-t adunk át, így a fénycsóva eltűnik!
                     lights={isHeadlightOn ? (formatManualLights(activeManualLights?.headlights) || detectedHeadlights) : null}
                     taillights={detectedTaillights || formatManualLights(activeManualLights?.taillights)}
                     drllight={detectedDrllight || formatManualLights(activeManualLights?.rdllight)}
                     isNightMode={isNightMode} 
                     floorOffset={floorOffset}
                     carBounds={carData}
                     lightSettings={activeProfile?.lightSettings}
                  />
              ) : (
                  <UniversalCarLights 
                     carBounds={carData} 
                     isNightMode={isNightMode} 
                     activeProfile={activeProfile}
                  />
              )
          )}

{!isMobile && (
            <ShowroomFloor 
              isNightMode={isNightMode} 
              yOffset={floorOffset} // <-- Ezt használd!
              width={carData.width} 
              length={carData.length} 
            />
          )}

          {/* ÁRNYÉK: Csak mobil nézetben vagy nappal */}
          {isMobile && !isNightMode && (
            <ContactShadows 
              position={[0, floorOffset, 0]} // <-- Ezt is ide kösd!
              opacity={0.6} 
              scale={150} 
              blur={1.5} 
              far={10} 
              resolution={512} 
              color="#000000" 
            />
          )}

          <OrbitControls 
            makeDefault 
            autoRotate={!isHoveringHotspot && activeSpot === null} 
            autoRotateSpeed={0.5} 
            enablePan={false} 
            minDistance={calculatedMinDistance}
            maxDistance={calculatedMaxDistance}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2 - 0.05} 
            target={[0, 0, 0]} 
          />
          {/* --- ÚJ: KAMERA EFFEKTEK (BLOOM) --- */}
          {isNightMode && activeProfile?.lightSettings?.useBloom && (
            <EffectComposer 
              enableNormalPass={false}
              /* Extra MSAA to remove sparkle on bright edges while rotating */
              multisampling={8}
            >
              <Bloom 
                luminanceThreshold={5} // keep high to avoid paint sparkle
                mipmapBlur      
                intensity={1.1}
              />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
      {authorCredit && (
  <div className="absolute bottom-2 right-4 z-[100] pointer-events-auto group/license">
    <p className="text-[9px] text-white/20 group-hover/license:text-white/60 transition-colors duration-500 select-text leading-tight max-w-[250px] text-right">
      {authorCredit}
    </p>
  </div>
)}
    </div>
  );
}