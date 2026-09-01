import Stripe from 'stripe';
import { createClerkClient } from '@clerk/backend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

// Fontos: Vercelen vagy serverless környezetben szükség lehet a body nyers olvasására a signature ellenőrzéshez,
// de egyszerűsítve így néz ki a logika:
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const event = req.body;

  // Amikor a fizetés sikeresen lezárult
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    const clerkUserId = session.metadata?.clerkUserId;
    const productType = session.metadata?.productType;

    if (clerkUserId) {
      try {
        // BEÍRJUK A CLERK PROFILBA A JOGOSULTSÁGOT!
        await clerkClient.users.updateUserMetadata(clerkUserId, {
          publicMetadata: {
            isPremium: true,
            passType: productType, // 'bundle', 'audi', 'bmw', vagy 'mercedes'
          },
        });
        console.log(`✅ Sikeresen frissítve a Clerk user (${clerkUserId}) prémium státusza.`);
      } catch (err) {
        console.error('❌ Hiba a Clerk metadata frissítésekor:', err);
      }
    }
  }

  return res.status(200).json({ received: true });
}