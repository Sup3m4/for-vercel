import Stripe from 'stripe';

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Stripe inicializálása a Cloudflare környezeti változókból a frissített API verzióval
    const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-03-25.dahlia; custom_checkout_payment_form_preview=v1',
    });

    const body = await request.json();
    const { clerkUserId, productType } = body;

    const priceMapping = {
      audi: env.STRIPE_AUDI_PRICE_ID,
      bmw: env.STRIPE_BMW_PRICE_ID,
      mercedes: env.STRIPE_MERCEDES_PRICE_ID,
      bundle: env.STRIPE_BUNDLE_PRICE_ID,
    };

    const priceId = priceMapping[productType];
    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Invalid product type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const url = new URL(request.url);
    const origin = url.origin;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      ui_mode: 'form',
      line_items: [{ price: priceId, quantity: 1 }],
      billing_address_collection: 'required',
      submit_type: 'auto',
      tax_id_collection: {
        enabled: true,
      },
      integration_identifier: 'custom_embedded_web_0001',
      saved_payment_method_options: {
        payment_method_save: 'enabled',
      },
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/`,
      metadata: {
        clerkUserId: clerkUserId,
        productType: productType,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Stripe hiba:', err);
    return new Response(JSON.stringify({ error: err.message || 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}