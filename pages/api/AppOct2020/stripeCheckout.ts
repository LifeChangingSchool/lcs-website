import { NextApiRequest, NextApiResponse } from 'next';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "LCS October 2020 Session",
                        },
                        unit_amount: 90000, // $900 in cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            customer_email: req.body,
            success_url: process.env.NODE_ENV === "production" ? "https://peaceful-brahmagupta-7beb96.netlify.app/apply?stage=2" : "http://localhost:3000/apply?stage=2",
            cancel_url: "production" ? "https://peaceful-brahmagupta-7beb96.netlify.app/apply?stage=2" : "http://localhost:3000",
        });

        res.status(200).json({id: session.id});
    } catch (e) {
        res.status(500).json({message: "Stripe error", details: e});
    }
}