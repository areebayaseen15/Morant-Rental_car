import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")("sk_test_51QlltdLpXsj6mi45QEiMFRtCciz7ivcshvpSMuf9019yEoC5dMCdBKsBwPg2J9l00lMqpgqhRZlUtwRo90g7X3n100LN0jiyCc");
export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}`},
      { status: 500}
);
}
}
