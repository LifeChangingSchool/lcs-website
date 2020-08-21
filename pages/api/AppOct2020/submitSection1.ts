import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(405);
        return;
    }
    const data = req.body;
    await axios.post("https://hooks.zapier.com/hooks/catch/8296204/oflwh2v", data);
    res.status(200).json(data);
}