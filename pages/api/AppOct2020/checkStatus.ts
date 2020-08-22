import { NextApiRequest, NextApiResponse } from 'next';
import Airtable from "airtable";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== "GET") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    try {
        const auth: string = req.headers.authorization;
        const apiKey: string = auth.substr(-36);
        if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
            res.status(401).json({message: "Unauthenticated"});
            return;
        }
    } catch (e) {
        res.status(401).json({message: "Unauthenticated"});
        return;
    }

    try {
        const params = req.query;
        const id = params["id"];

        const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base("appIdZVi5D93ewaHK");

        base("Table 1").select({
            filterByFormula: `{GraphQL ID} = '${id}'`,
        }).firstPage((err, records) => {
            if (err) {
                res.status(500).json({message: "AirTable request error", details: err, id: id});
                return;
            }

            const record = records[0];
            const data = {
                id: record.get("GraphQL ID"),
                status: record.get("Application status"),
            }

            res.status(200).json({data: data});
            return;
        });
    } catch (e) {
        res.status(500).json({message: "AirTable request error", details: e.message});
        return;
    }
}