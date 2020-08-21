import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }
    const data = req.body;
    const auth: string = req.headers.authorization;
    const apiKey: string = auth.substr(-36);
    if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
        res.status(401).json({message: "Unauthenticated"});
        return;
    }
    await axios.post("https://hooks.zapier.com/hooks/catch/8296204/ofleg8e/", data);
    res.status(200).json({data: data, headers: req.headers});
    return;
}