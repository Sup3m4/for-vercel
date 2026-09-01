const Stripe = require('stripe');
const { createClerkClient } = require('@clerk/backend');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const event = req.body;

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    const clerkUserId = session.metadata?.clerkUserId;
    const productType = session.metadata?.productType;

    if (clerkUserId) {
      try {
        await clerkClient.users.updateUserMetadata(clerkUserId, {
          publicMetadata: {
            isPremium: true,
            passType: productType,
          },
        });
        console.log(`Sikeresen frissítve a Clerk user (${clerkUserId}) prémium státusza.`);
      } catch (err) {
        console.error('Hiba a Clerk metadata frissítésekor:', err);
      }
    }
  }

  return res.status(200).json({ received: true });
};