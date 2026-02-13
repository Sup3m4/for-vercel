import * as THREE from 'three';

export const bmwF32Config = {
  fileName: "f32",

  applySettings: (mesh: THREE.Mesh, isNightMode: boolean): boolean => {
    const name = mesh.name;

    // 1. ÜVEG / BUROK (lightglass)
    if (name.includes("lightglass")) {
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((mat: any) => {
        mat.transparent = true;
        mat.opacity = isNightMode ? 0.05 : 0.2;
        mat.emissiveIntensity = 0;
      });
      return true;
    }

    // 2. ANGEL EYES (partssi_0)
    if (name === "body_paint_mat_partssi_0") {
      
      // Megnézzük, hol van a 3D térben
      const worldPos = new THREE.Vector3();
      mesh.getWorldPosition(worldPos);

      // --- A "LAP", AMIVEL ELVÁGJUK AZ AUTÓT ---
      // Az eleje nálad Z = 0.06-nál van. 
      // A vágást a 0.02-es vonalra tesszük: ami efelett van, az az ELEJE.
      const isFront = worldPos.z > 0.02;

      // FONTOS: Mindig klónozunk, hogy a hátsó lámpa anyaga különváljon az elsőétől!
      if (!(mesh.material as any)._isCloned) {
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map(m => m.clone()) as any;
        } else {
          mesh.material = mesh.material.clone();
        }
        (mesh.material as any)._isCloned = true;
      }

      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

      materials.forEach((mat: any) => {
        if (isFront && isNightMode) {
          // --- ELEJE: VILÁGÍT ---
          mat.color = new THREE.Color('#000000');
          mat.emissive = new THREE.Color('#e0f7fa'); // Jégfehér
          mat.emissiveIntensity = 60; 
          mat.toneMapped = false;
        } else {
          // --- HÁTULJA (VAGY NAPPAL): SÖTÉT MARAD ---
          // Itt kényszerítjük a resetet, hogy véletlenül se világítson!
          mat.emissive = new THREE.Color('#000000');
          mat.emissiveIntensity = 0;
          mat.toneMapped = true;
          // Ha ez a hátsó lámpa, adjunk neki egy sötétszürke alap színt
          if (!isFront) {
             mat.color = new THREE.Color('#111111');
          }
        }
      });
      
      return true; 
    }

    return false;
  },

  isHeadlight: (mesh: THREE.Mesh) => {
    if (mesh.name === "body_paint_mat_partssi_0") {
       const worldPos = new THREE.Vector3();
       mesh.getWorldPosition(worldPos);
       // Itt is ugyanazt a vágást használjuk
       return worldPos.z > 0.02;
    }
    return false;
  }
};