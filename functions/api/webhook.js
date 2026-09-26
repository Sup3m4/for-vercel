import Stripe from 'stripe';
import { createClerkClient } from '@clerk/backend';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

// Kikapcsoljuk a Next.js alapértelmezett body parserét a nyers adatokhoz
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Nincsenek felesleges felkiáltójelek, a JS kezeli
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Ha sikeres a fizetés
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    const clerkUserId = session.metadata?.clerkUserId;
    const productType = session.metadata?.productType;

    if (clerkUserId && productType) {
      try {
        await clerkClient.users.updateUserMetadata(clerkUserId, {
          publicMetadata: {
            isPremium: true,
            passType: productType,
          },
        });
        console.log(`Sikeresen frissítve a Clerk user (${clerkUserId}) prémium státusza erre: ${productType}.`);
      } catch (err) {
        console.error('Hiba a Clerk metadata frissítésekor:', err);
        return res.status(500).json({ error: 'Clerk update failed' });
      }
    }
  }

  return res.status(200).json({ received: true });
}