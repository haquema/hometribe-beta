import { redirect } from 'next/navigation';
const stripe = require('stripe')(process.env.STRIPE_TEST_API)

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.SERVER_URL}/?payment=success`,
      cancel_url: `${process.env.SERVER_URL}/?payment=cancel`,
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1OqydPJOEYgXXATz5QtWvRJo',
          quantity: 1,
        },
      ],
      mode: 'payment',
    });
    
    return Response.json({ message: 'success', checkoutUrl: session.url });
  } catch (err) {
    return Response.json({ message: 'fail', error: {err} });
  }
}