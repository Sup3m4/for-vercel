import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

// Ugyanannak a kulcsnak kell lennie, amivel titkosítottad!
const XOR_KEY = 0xAA; 

interface ProtectedViewerProps {
  modelPath: string; // Pl. "/images/brands/bmw/1series/f20/f20.glb"
  className?: string;
}

export function ProtectedModelViewer({ modelPath, className }: ProtectedViewerProps) {
  const [scene, setScene] = useState<THREE.Group | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!modelPath) return;
    let isMounted = true;

    async function loadAndDecrypt() {
      try {
        setLoading(true);
        // A kiterjesztést automatikusan .dat-ra cseréljük
        const secureUrl = modelPath.replace(/\.glb$/i, ".dat");

        const response = await fetch(secureUrl);
        if (!response.ok) throw new Error("A modell letöltése sikertelen.");
        
        const arrayBuffer = await response.arrayBuffer();

        // 1. XOR Visszafejtés a memóriában
        const bytes = new Uint8Array(arrayBuffer);
        for (let i = 0; i < bytes.length; i++) {
          bytes[i] = bytes[i] ^ XOR_KEY; 
        }

        // 2. GLTF & Draco betöltés
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        loader.setDRACOLoader(dracoLoader);

        loader.parse(bytes.buffer, "", (gltf: GLTF) => {
          if (isMounted) {
            setScene(gltf.scene);
            setLoading(false);
          }
        });
      } catch (err) {
        console.error("Hiba a titkosított modell betöltésekor:", err);
        setLoading(false);
      }
    }

    loadAndDecrypt();

    return () => {
      isMounted = false;
    };
  }, [modelPath]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[300px] text-muted-foreground">
        Loading secure 3D model...
      </div>
    );
  }

  if (!scene) return null;

  return (
    <div className={className || "w-full h-[400px]"}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Center>
          <primitive object={scene} />
        </Center>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}