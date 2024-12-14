import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export async function POST(request) {
  try {
    const { products } = await request.json();

    if (!products || !Array.isArray(products) || products.length === 0) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: { name: product.name },
        unit_amount: product.price * 100, // Stripe expects amounts in cents
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}