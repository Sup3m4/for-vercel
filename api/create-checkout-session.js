const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { clerkUserId, productType } = req.body;

  const priceMapping = {
    audi: process.env.STRIPE_AUDI_PRICE_ID,
    bmw: process.env.STRIPE_BMW_PRICE_ID,
    mercedes: process.env.STRIPE_MERCEDES_PRICE_ID,
    bundle: process.env.STRIPE_BUNDLE_PRICE_ID,
  };

  const priceId = priceMapping[productType];
  if (!priceId) {
    return res.status(400).json({ error: 'Invalid product type' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/`,
      metadata: {
        clerkUserId: clerkUserId,
        productType: productType,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe hiba:', err);
    return res.status(500).json({ error: err.message });
  }
};