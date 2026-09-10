import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';



function ScrollDrivenDNA() {
  const modelRef = useRef<THREE.Group>(null);
  // Betöltjük a modellt a public mappából
  const { scene } = useGLTF('/models/dna.glb');
  
  // Egy ref, ami a görgetés aktuális pozícióját tárolja (így nem okoz felesleges React újra-renderelést)
  const scrollY = useRef(0);

  // 1. Görgetés figyelése
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    // Figyeljük a window scroll eseményét
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Takarítás, ha a komponens megszűnik
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  // 2. Képkockánkénti animáció (A varázslat itt történik)
  useFrame(() => {
    if (modelRef.current) {
      // Kiszámoljuk a cél-elfordulást a görgetés alapján. 
      // A 0.003-as szorzó határozza meg, milyen gyorsan forogjon a tekerés hatására.
      const targetRotationY = scrollY.current * 0.003;
      
      // THREE.MathUtils.lerp: Ez felel azért, hogy a mozgás "vajpuha" legyen, 
      // és a modell ne darabosan ugorjon, ha a felhasználó hirtelen teker egy nagyot.
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y, 
        targetRotationY, 
        0.05 // Az easing (puhítás) mértéke
      );
    }
  });

  return (
    <group ref={modelRef} position={[0, 0.8, 0]}>
      <Center>
        {/* A méretet (scale) itt tudod nagyítani/kicsinyíteni az igényeid szerint */}
        <primitive object={scene} scale={2.5} />
      </Center>
    </group>
  );
}

function SideBackgroundTurbo() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/turbo.glb');
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      const targetRotationY = scrollY.current * 0.002;
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y, 
        targetRotationY, 
        0.05
      );
    }
  });

  return (
    // X: -5.5 (mégjebb balra tolva), Scale: 0.4 (nagyon kicsi, diszkrét méret)
    <group ref={modelRef} position={[-8.5, 0, -2]}>
      <Center>
        <primitive object={scene} scale={0.3} />
      </Center>
    </group>
  );
}

function SideBackgroundPiston() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/piston.glb');
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      const targetRotationY = scrollY.current * 0.002;
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y, 
        targetRotationY, 
        0.05
      );
    }
  });

  return (
    <group ref={modelRef} position={[8.5, 0, -2]}>
      <Center>
        <primitive object={scene} scale={0.4} />
      </Center>
    </group>
  );
}


// 4. A fő háttér konténer mindhárom elemmel
export function BackgroundDNA() {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        />
        
        <div className="absolute inset-0 opacity-80">
        <Canvas 
  camera={{ position: [0, 0, 10], fov: 50 }} 
  dpr={[1, 1]} // Levesszük 1-re a felbontási szorzót (mobilokon/laptopokon ez éles elég, de sokkal gyorsabb)
  gl={{ 
    antialias: false, // Kikapcsoljuk az élek szoftveres simítását (ez hozza a legtöbb FPS-t háttérnél)
    powerPreference: "high-performance", // Arra kényszeríti a gépet, hogy a dedikált videokártyát használja
    alpha: true 
  }}
>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={3} color="#60a5fa" /> 
            <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />

            <group position={[-1, 0, 0]}>
  <Sparkles 
    count={250}      
    scale={15}       
    size={8}         
    speed={0.5}      
    color="#ffffff"  
  />
</group>
            
            <ScrollDrivenDNA />
            <SideBackgroundTurbo />
            <SideBackgroundPiston />
          </Canvas>
        </div>
        
      </div>
    );
}



  export function TurboViewer() {
    return (
      <div className="w-full h-[400px] md:h-[500px] bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl">
        {/* Címke a sarokban, hogy profi high-tech hatása legyen */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-wider uppercase">
          Live 3D X-Ray Model
        </div>
  
        <Canvas 
  camera={{ position: [0, 0, 10], fov: 50 }} 
  dpr={[1, 1]} // Levesszük 1-re a felbontási szorzót (mobilokon/laptopokon ez éles elég, de sokkal gyorsabb)
  gl={{ 
    antialias: false, // Kikapcsoljuk az élek szoftveres simítását (ez hozza a legtöbb FPS-t háttérnél)
    powerPreference: "high-performance", // Arra kényszeríti a gépet, hogy a dedikált videokártyát használja
    alpha: true 
  }}
>
          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 10]} intensity={3} color="#60a5fa" />
          <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
          
          <SideBackgroundTurbo />
  
          {/* Az OrbitControls engedi, hogy a felhasználó az egerével forgassa és zoomolja a turbót! */}
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    );
  }

// Előtöltjük a 3D modellt, hogy azonnal ott legyen az oldal megnyitásakor
useGLTF.preload('/models/dna.glb');
useGLTF.preload('/models/turbo.glb');
useGLTF.preload('/models/piston.glb');