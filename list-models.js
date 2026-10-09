// list-models.js
// Ez a script megmondja, mi a pontos neve a modellnek, amit használnunk kell.
import 'dotenv/config';
const API_KEY = process.env.GEN_AI_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;



fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
        console.error("❌ API HIBA:", data.error.message);
    } else if (data.models) {
       
        data.models.forEach(model => {
            // Csak azokat írjuk ki, amik tudnak szöveget generálni
            if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes("generateContent")) {
                // Levágjuk az elejéről a "models/" részt, hogy csak a tiszta nevet kapjuk
             
            }
        });
       
    } else {
      
    }
  })
  .catch(err => console.error("Hálózati hiba:", err));