import React, { Suspense, useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Stage, Html, useProgress, OrbitControls, ContactShadows, MeshReflectorMaterial, Environment, SpotLight } from '@react-three/drei';
import { AlertTriangle, X, Eye, EyeOff, CircleDot, ChevronLeft, Lock, ChevronRight, Sun, Moon } from 'lucide-react';
import * as THREE from 'three'; 
import { Center } from '@react-three/drei';
import { CAR_MODEL_CONFIGS } from '../configs/carModels';
import { audiEngineProfiles } from '../data/carDatabase/brands/audi/audi-engineprofiles';

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
function ExactCarLights({ 
  lights, 
  taillights,
  angelEyes,
  forwardDir, 
  isNightMode 
}: { 
  lights?: { left: THREE.Vector3, right: THREE.Vector3 } | null, 
  taillights?: { left: THREE.Vector3, right: THREE.Vector3 } | null,
  angelEyes?: { left: THREE.Vector3, right: THREE.Vector3 } | null,
  forwardDir: number,
  isNightMode: boolean 
}) {
if (!isNightMode) return null;

const beamDistance = 40; 
const beamDrop = -3.0; // Kicsit lefelé világítson
const bulbSize = 0.05; // 5 cm-es izzó (nagyon kicsi!)

return (
  <group>
      {/* --- ELSŐ LÁMPÁK --- */}
      {lights && lights.left && (
          <group>
              {/* Bal Izzó - Fizikai test */}
              <mesh position={lights.left}>
                  {/* Apró gömb */}
                  <sphereGeometry args={[bulbSize, 16, 16]} />
                  {/* Erősen világító fehér anyag */}
                  <meshStandardMaterial 
                      color="#ffffff" 
                      emissive="#D4EBFF"
                      emissiveIntensity={20} // Nagyon fényes, de kicsi
                      toneMapped={false}
                  />
              </mesh>
              {/* Fénycsóva */}
              <SpotLight
                  position={lights.left}
                  target-position={[lights.left.x, beamDrop, lights.left.z + (beamDistance * forwardDir)]} 
                  angle={0.6} 
                  penumbra={0.5} 
                  distance={60} 
                  attenuation={5} 
                  anglePower={5} 
                  intensity={150} 
                  color="#D4EBFF" 
                  opacity={0.4} 
              />
          </group>
      )}

      {lights && lights.right && (
          <group>
              <mesh position={lights.right}>
                  <sphereGeometry args={[bulbSize, 16, 16]} />
                  <meshStandardMaterial 
                      color="#ffffff" 
                      emissive="#D4EBFF"
                      emissiveIntensity={20}
                      toneMapped={false}
                  />
              </mesh>
              <SpotLight
                  position={lights.right}
                  target-position={[lights.right.x, beamDrop, lights.right.z + (beamDistance * forwardDir)]}
                  angle={0.6} 
                  penumbra={0.5} 
                  distance={60} 
                  attenuation={5} 
                  anglePower={5} 
                  intensity={150} 
                  color="#D4EBFF" 
                  opacity={0.4}
              />
          </group>
      )}

      {/* --- HÁTSÓ LÁMPÁK --- */}
      {taillights && taillights.left && (
          <group>
              {/* Bal Hátsó Izzó */}
              <mesh position={taillights.left}>
                  <sphereGeometry args={[bulbSize, 16, 16]} />
                  <meshStandardMaterial 
                      color="#ff0000" 
                      emissive="#FF0000"
                      emissiveIntensity={10}
                      toneMapped={false}
                  />
              </mesh>
              {/* Piros fény környezetnek */}
              <pointLight position={taillights.left} intensity={5} distance={3} color="#FF2200" decay={2} />
          </group>
      )}
      {taillights && taillights.right && (
          <group>
              <mesh position={taillights.right}>
                  <sphereGeometry args={[bulbSize, 16, 16]} />
                  <meshStandardMaterial 
                      color="#ff0000" 
                      emissive="#FF0000"
                      emissiveIntensity={10}
                      toneMapped={false}
                  />
              </mesh>
              <pointLight position={taillights.right} intensity={5} distance={3} color="#FF2200" decay={2} />
          </group>
      )}
  </group>
);
}

// --- B. OPCIÓ: UNIVERZÁLIS FÉNYEK (Fallback - Ha nem találtunk lámpát) - ENHANCED ---
function UniversalCarLights({ 
    carBounds, 
    isNightMode,
    rotation = [0, 0, 0] 
}: { 
    carBounds: { width: number, length: number, height: number, forwardDir: number }, 
    isNightMode: boolean,
    rotation?: [number, number, number] 
}) {
  const frontGlow = useGlowTexture('#D4EBFF', 1.2);
  const rearGlow = useGlowTexture('#FF2200', 1.1);

  if (!isNightMode) return null;

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

  const { width, length, height, forwardDir } = carBounds;

  // Matematikai pozíciók (sarkok) - improved positioning
  const lampX = (width / 2) * 0.72; 
  const lampY = (-height / 2) + (height * 0.60); 
  const tailY = (-height / 2) + (height * 0.65); 
  // FONTOS: Kicsit kijjebb toljuk (0.15), hogy ne lógjon bele a BMW lökhárítójába
  const frontZ = ((length / 2) * forwardDir) + (0.15 * forwardDir); 
  const rearZ = ((length / 2) * -forwardDir) - (0.15 * forwardDir);

  const beamDist = 35;
  const beamDrop = -3.5;

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
function CameraController({ activeSpot, hotspots, modelRadius }: { activeSpot: number | null, hotspots?: Hotspot3D[], modelRadius: number }) {
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
        const spotPos = new THREE.Vector3(spot.x, spot.y, spot.z);
        const isTop = spot.y > 0.3;
        const verticalOffset = isTop ? -(modelRadius * 0.20) : (modelRadius * 0.20); 

        targetVec.current.copy(spotPos);
        targetVec.current.y += verticalOffset;

        const direction = spotPos.clone().normalize();
        if (direction.length() < 0.1) direction.set(0, 0.5, 1).normalize();

        const isMobile = window.innerWidth < 768;
        const multiplier = isMobile ? 4.2 : 3.2;
        const distance = Math.max(modelRadius * multiplier, 2.5); 
        
        cameraPosVec.current.copy(spotPos).add(direction.multiplyScalar(distance));
        cameraPosVec.current.y += isMobile ? (modelRadius * 0.4) : (modelRadius * 0.3);

        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 2000);
        return () => clearTimeout(timer);
      } else {
        targetVec.current.set(0, 0, 0);
      }
    }
  }, [activeSpot, hotspots, modelRadius]);

  useFrame((state, delta) => {
    // @ts-ignore
    if (!controls) return;
    // @ts-ignore
    controls.target.lerp(targetVec.current, 4 * delta);
    if (isAnimating && activeSpot !== null) camera.position.lerp(cameraPosVec.current, 3 * delta);
  });
  return null;
}

// --- MODELL KOMPONENS ---
function Model({ path, hotspots, showHotspots, activeSpot, setActiveSpot, setIsHoveringHotspot, scale = 1, rotation = [0, 0, 0], setCalculatedMinDistance, setCalculatedMaxDistance, setModelRadius, onModelLoaded, isNightMode, isMobile, forcedForwardDir, customLightNames, manualLightPositions, activeProfile }: any) {
  const { scene } = useGLTF(path, '/draco/') as any;
  const modelRef = useRef<THREE.Group>(null);
  const [loadStage, setLoadStage] = useState(0); // 0: Start, 1: Mesh Ready, 2: Shaders Ready
  const [smartHotspots, setSmartHotspots] = useState<Hotspot3D[]>([]);
  const [modelRadiusState, setModelRadiusState] = useState(4);
  const activeManualLights = activeProfile?.manualLightPositions;
  const fileName = (path.split('/').pop() || "").split('?')[0];
  useMemo(() => {
    if (!scene) return;
    scene.traverse((child: any) => {
       if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material && (child.name.toLowerCase().includes('glass') || child.name.toLowerCase().includes('window'))) {
              child.material.transparent = true;
              child.material.opacity = 0.3;
          }
       }
    });
 }, [scene]);


  // 1. LÁMPA DETEKTÁLÁS ÉS ANYAGCSERE (ENHANCED FOR REALISTIC NIGHT MODE)
  useEffect(() => {
    if (!scene || !modelRef.current) return;
    const blacklist = ['brake', 'caliper', 'disc', 'rotor', 'bremse', 'wheel', 'rim', 'tire', 'felge', 'blinker', 'signal', 'indicator', 'mirror', 'spiegel', 'wing', 'turn', 'interior', 'seat', 'steering', 'windshield', 'window', 'glass_window', 'plate', 'license'];
    
    // 1. MÉRETEK KISZÁMÍTÁSA (EZ LEGYEN AZ ELSŐ!)
    const modelBox = new THREE.Box3().setFromObject(modelRef.current);
    const modelSize = new THREE.Vector3();
    const modelCenter = new THREE.Vector3();
    modelBox.getSize(modelSize);
    modelBox.getCenter(modelCenter);

    // 2. IRÁNY MEGHATÁROZÁSA
    let forwardDir = 1;
    if (forcedForwardDir !== undefined) {
        forwardDir = forcedForwardDir;
    } else {
        forwardDir = modelSize.z > modelSize.x ? 1 : -1;
    }

    // 3. LÁMPÁK KERESÉSE ÉS ANYAGCSERE
    const foundHeadlights: THREE.Object3D[] = [];
    const foundTaillights: THREE.Object3D[] = [];
    const foundAngelEyes: THREE.Object3D[] = [];
    
    scene.traverse((child: any) => {
      if (child.isMesh) {
         const name = child.name;
         const lowerName = name.toLowerCase();

         // --- 1. DETEKTÁLÁS ---
         let isCustomHeadlight = false;
         let isCustomTaillight = false;

         if (customLightNames) {
             if (customLightNames.headlights && customLightNames.headlights.some((n: string) => name.includes(n))) {
                 isCustomHeadlight = true;
             }
             if (customLightNames.taillights && customLightNames.taillights.some((n: string) => name.includes(n))) {
                 isCustomTaillight = true;
             }
         }

         const isGeneralHeadlight = lowerName.includes('headlight') || lowerName.includes('front_light');
         const isGeneralTaillight = lowerName.includes('taillight') || lowerName.includes('rear_light');

         const isHeadlight = isCustomHeadlight || (!customLightNames?.headlights && isGeneralHeadlight);
         const isTaillight = isCustomTaillight || (!customLightNames?.taillights && isGeneralTaillight);
         const isAngelEye = lowerName.includes('angel') || lowerName.includes('halo');

         if (isHeadlight) foundHeadlights.push(child);
         if (isTaillight) foundTaillights.push(child);
         if (isAngelEye) foundAngelEyes.push(child);

         // --- 2. ANYAGCSERE (Hogy maga a test is világítson) ---
         if (isNightMode) {
             // Ha ez egy lámpa (akár név alapján, akár custom lista alapján)
             if (isHeadlight || isTaillight || isAngelEye) {
                 if (!child.userData.originalMaterial) child.userData.originalMaterial = child.material.clone();
                 
                 // Létrehozunk egy új, erősen világító anyagot
                 const newMat = new THREE.MeshStandardMaterial({
                     color: isHeadlight ? "#D4EBFF" : "#FF0000",
                     emissive: isHeadlight ? "#D4EBFF" : "#FF0000",
                     emissiveIntensity: isHeadlight ? 10 : 5, // Jó erős legyen
                     toneMapped: false // Ez fontos a ragyogáshoz!
                 });
                 
                 child.material = newMat;
             }
         } else {
             // Nappal visszaállítjuk az eredetit
             if (child.userData.originalMaterial) {
                 child.material = child.userData.originalMaterial;
             }
         }
      }
    });

    let detectedLights = null;
    let detectedTaillights = null;
    let detectedAngelEyes = null;
    
    // Detect headlight positions - improved positioning
    if (manualLightPositions) {
      // --- ELSŐ LÁMPÁK ---
      if (manualLightPositions.headlights) {
          const pos = manualLightPositions.headlights;
          // Figyelembe vesszük az autó irányát (forwardDir)
          const zFinal = pos.z * forwardDir; 
          
          detectedLights = {
              left: new THREE.Vector3(pos.x, pos.y, zFinal),
              right: new THREE.Vector3(-pos.x, pos.y, zFinal)
          };
      }

      // --- HÁTSÓ LÁMPÁK ---
      if (manualLightPositions.taillights) {
          const pos = manualLightPositions.taillights;
          // A hátsónál is a forwardDir-hez igazítjuk (ha -1, akkor megfordul)
          const zFinal = pos.z * forwardDir;

          detectedTaillights = {
              left: new THREE.Vector3(pos.x, pos.y, zFinal),
              right: new THREE.Vector3(-pos.x, pos.y, zFinal)
          };
      }
  }
    
    // Detect angel eyes positions (for BMW and similar)
    if (foundAngelEyes.length >= 2) {
        let minX = Infinity, maxX = -Infinity;
        let leftMesh = foundAngelEyes[0], rightMesh = foundAngelEyes[0];

        foundAngelEyes.forEach(mesh => {
            // @ts-ignore
            if(!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
            const c = new THREE.Vector3();
            // @ts-ignore
            mesh.geometry.boundingBox.getCenter(c);
            const w = c.applyMatrix4(mesh.matrixWorld);
            const relX = w.x - modelCenter.x;

            if (relX < minX) { minX = relX; rightMesh = mesh; } 
            if (relX > maxX) { maxX = relX; leftMesh = mesh; }
        });

        const getPos = (m: THREE.Object3D) => {
             // @ts-ignore
             const c = new THREE.Vector3(); 
             // @ts-ignore
             m.geometry.boundingBox.getCenter(c);
             return c.applyMatrix4(m.matrixWorld).sub(modelCenter);
        }
        
        detectedAngelEyes = {
            left: getPos(leftMesh),
            right: getPos(rightMesh)
        };
    }

    if (modelRef.current) {
        const box = new THREE.Box3().setFromObject(modelRef.current);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        
        let frontCount = 0;
        let frontZSum = 0;
        modelRef.current.traverse((child) => {
             if (child.name.includes('grill') || child.name.includes('headlight')) {
                 const p = new THREE.Vector3(); child.getWorldPosition(p);
                 frontZSum += p.z; frontCount++;
             }
        });
        let fwd = -1;
        if(frontCount > 0) fwd = (frontZSum / frontCount) > center.z ? 1 : -1;

        if (onModelLoaded) {
            onModelLoaded({
                width: size.x, length: size.z, height: size.y, 
                forwardDir: fwd,
                detectedLights: detectedLights,
                detectedTaillights: detectedTaillights,
                detectedAngelEyes: detectedAngelEyes
            });
        }
    }

  }, [scene, isNightMode]);

  // --- HOTSPOT SZÁMÍTÁS ---
  useEffect(() => {
    if (!modelRef.current || !hotspots) return;
    modelRef.current.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(modelRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    
    let frontCount = 0; let frontZSum = 0;
    modelRef.current.traverse((child) => {
         if (child.name.includes('grill') || child.name.includes('headlight')) {
             const p = new THREE.Vector3(); child.getWorldPosition(p);
             frontZSum += p.z; frontCount++;
         }
    });
    let forwardDir = -1;
    if(frontCount > 0) forwardDir = (frontZSum / frontCount) > center.z ? 1 : -1;
    const isZLongest = size.z > size.x;

    const calculatedHotspots = hotspots.map((spot: Hotspot3D) => {
      const labelLower = spot.label.toLowerCase();
      let targetPos = new THREE.Vector3(spot.x, spot.y, spot.z);
      let foundMesh = false;
      const searchTerms: Record<string, string[]> = {
        'brake': ['caliper', 'brake', 'disc', 'bremse'],
        'wheel': ['wheel', 'tire', 'rim', 'felge'],
        'headlight': ['headlight', 'lamp', 'light_front'],
        'exhaust': ['exhaust', 'muffler', 'pipe', 'tip'],
        'engine': ['engine', 'motor', 'cover', 'block'],
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
    
    const sphere = new THREE.Sphere();
    box.getBoundingSphere(sphere);
    if (sphere.radius > 0) {
        setModelRadiusState(sphere.radius);
        if (setModelRadius) setModelRadius(sphere.radius);
        // Calculate min and max distance relative to model radius for consistent zoom across all models
        const isMobileCheck = window.innerWidth < 768;
        const minDist = sphere.radius * 1.2;
        const maxDist = sphere.radius * (isMobileCheck ? 4.5 : 3.5); // Consistent multiplier for all models
        if (setCalculatedMinDistance) setCalculatedMinDistance(minDist);
        if (setCalculatedMaxDistance) setCalculatedMaxDistance(maxDist);
    }

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
                        distanceFactor={Math.max(modelRadiusState * 2.2, 2)} 
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
      <CameraController activeSpot={activeSpot} hotspots={smartHotspots} modelRadius={modelRadiusState} />
    </group>
  );
}

// ----------------------
// EXPORT COMPONENT
// ----------------------
export default function Car3DViewer({ modelPath, hotspots, scale = 1, rotation = [0, 0, 0], isPremium = false, onUnlock = () => {}, modelForwardDir, customLightNames }: { modelPath: string, hotspots?: Hotspot3D[], scale?: number, rotation?: [number, number, number], isPremium?: boolean, onUnlock?: () => void, modelForwardDir?: number, customLightNames?: { headlights?: string[], taillights?: string[] } }) {
  const [showHotspots, setShowHotspots] = useState(isPremium);
  const [isHoveringHotspot, setIsHoveringHotspot] = useState(false);
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  const [calculatedMinDistance, setCalculatedMinDistance] = useState(2.5);
  const [calculatedMaxDistance, setCalculatedMaxDistance] = useState(12);
  const [modelRadius, setModelRadius] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const activeProfile = useMemo(() => {
    return audiEngineProfiles.find(p => p.model3DPath === modelPath);
}, [modelPath]);

  const activeForwardDir = modelForwardDir ?? activeProfile?.modelForwardDir ?? 1;
  const activeLightNames = customLightNames ?? activeProfile?.customLightNames;
  const activeManualLights = activeProfile?.manualLightPositions;
  
  // ITT VAN A CAR DATA DEFINÍCIÓJA BIZTOSAN A HELYÉN:
  const [carData, setCarData] = useState<{
      width?: number; 
      length?: number;
      height: number; 
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
          <div className="relative group">
            <button 
                onClick={(e) => { 
                    e.stopPropagation(); 
                    // Ha nincs prémium -> Unlock ablak, egyébként váltás
                    if (!isPremium) onUnlock(); 
                    else setIsNightMode(!isNightMode); 
                }} 
                className={`backdrop-blur-md border rounded-full p-2.5 transition-all hover:scale-110 flex items-center justify-center 
                    ${!isPremium 
                        ? 'bg-slate-900/10 border-slate-900/20 text-slate-500 hover:bg-slate-900/20' // Zárolt stílus
                        : isNightMode 
                            ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30' 
                            : 'bg-slate-900/10 border-slate-900/20 text-slate-700 hover:bg-slate-900/20'
                    }`} 
            >
                {/* Ikon csere: Ha nincs prémium -> Lakat */}
                {!isPremium ? <Lock className="w-5 h-5 opacity-70" /> : (isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>
            
            {/* Tooltip (Leírás) */}
            {!isPremium && (
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-sm border border-white/10">
                    Unlock Night Mode
                </div>
            )}
          </div>

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
        gl={{ 
          powerPreference: "high-performance", // Kéri az erősebb GPU-t
          antialias: false // Az élsimítás kikapcsolása laptopon sokat dob az FPS-en
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
              forcedForwardDir={activeForwardDir}
              customLightNames={activeLightNames} 
              manualLightPositions={activeManualLights}
            />
          </Stage>
          
          {/* HIBRID MEGOLDÁS: Always show lights - use detected positions when available, fallback to calculated positions */}
          {carData.detectedLights ? (
              // Use ExactCarLights when headlights are detected (includes all detected lights)
              <ExactCarLights 
                 lights={carData.detectedLights} 
                 taillights={carData.detectedTaillights || undefined}
                 angelEyes={carData.detectedAngelEyes || undefined}
                 forwardDir={carData.forwardDir} 
                 isNightMode={isNightMode} 
              />
          ) : (
              // Fallback: Use UniversalCarLights when headlights aren't detected (ensures headlights always show)
              // This guarantees headlights will always be visible, even if not detected in the model
              <>
                  <UniversalCarLights 
                     carBounds={carData as any} 
                     isNightMode={isNightMode} 
                  />

{(carData.detectedLights || carData.detectedTaillights) && (
              <ExactCarLights 
                 lights={carData.detectedLights} 
                 taillights={carData.detectedTaillights}
                 angelEyes={carData.detectedAngelEyes}
                 forwardDir={activeForwardDir} 
                 isNightMode={isNightMode} 
              />
          )}

                  {/* Add detected special features (angel eyes) on top if available */}
                  {carData.detectedAngelEyes && (
                      <ExactCarLights 
                         lights={undefined}
                         taillights={undefined}
                         angelEyes={carData.detectedAngelEyes}
                         forwardDir={carData.forwardDir} 
                         isNightMode={isNightMode} 
                      />
                  )}
              </>
          )}

          {!isMobile && <ShowroomFloor isNightMode={isNightMode} yOffset={floorOffset} width={carData.width} length={carData.length} />}
          {isMobile && !isNightMode && <ContactShadows position={[0, floorOffset, 0]} opacity={0.6} scale={150} blur={1.5} far={10} resolution={512} color="#000000" />}

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
        </Suspense>
      </Canvas>
    </div>
  );
}