import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'micro-cors';
import { buffer } from 'micro';
import Stripe from 'stripe';
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-03-02',
});

const cors = Cors({
    allowMethods: ['POST', 'HEAD']
});

export const config = {
    api: {
        bodyParser: false,
    },
}

const stripeFulfill = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    const buf = await buffer(req)
    const sig = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_ENDPOINT_SECRET);
    } catch (e) {
        console.log(`Webhook Error: ${e.message}`);
        return res.status(400).json(`Webhook Error: ${e.message}`);
    }

    if (event.type === "checkout.session.completed") {
        try {
            const session: any = event.data.object;
            await axios.post("https://hooks.zapier.com/hooks/catch/8296204/ofxmjlg/", {
                email: session.customer_email,
            });
        } catch (e) {
            return res.status(400).json(`Zapier Error: ${e.message}`);
        }
    }

    return res.status(200).json({message: "Success"});
}

export default cors(stripeFulfill as any);