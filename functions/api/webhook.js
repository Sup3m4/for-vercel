import Stripe from 'stripe';
import { createClerkClient } from '@clerk/backend';

export async function onRequestPost(context) {
  const { request, env } = context;

  const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  });
  
  const clerkClient = createClerkClient({ secretKey: env.CLERK_SECRET_KEY });

  const signature = request.headers.get('stripe-signature');
  const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return new Response('Missing signature or webhook secret', { status: 400 });
  }

  let event;

  try {
    // Cloudflare Pages-en a request.text() adja vissza a Stripe által küldett nyers adatot
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
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
        return new Response(JSON.stringify({ error: 'Clerk update failed' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}