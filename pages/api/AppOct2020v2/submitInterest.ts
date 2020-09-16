import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import Airtable from "airtable";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // check method
    if (req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    // check authentication
    const auth: string = req.headers.authorization;
    const apiKey: string = auth.substr(-36);
    if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
        res.status(401).json({message: "Unauthenticated"});
        return;
    }

    // check AirTable
    const data = req.body;
    const email = data.email;

    const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base("appB44PQhicoPoIGO");

    base("Table 1").select({
        filterByFormula: `{Email} = '${email}'`,
    }).firstPage((err, records) => {
        if (err) {
            res.status(500).json({message: "AirTable request error", details: err});
            return;
        }

        // if record already exists
        if (records.length > 0) {
            res.status(200).json({message: "You've already expressed interest with this email address."});
        }

        // otherwise trigger Zapier
        axios.post("https://hooks.zapier.com/hooks/catch/8296204/ow2cbvg/", data).then(() => {
            res.status(200).json({message: "Success", data: data});
            return;
        }).catch(err => {
            res.status(500).json({message: "Zapier error", details: err});
            return;
        });
    });
}