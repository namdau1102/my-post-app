import { useAuth } from "../../src/hooks/useAuth";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    console.log("req method: " + req.method)
    const { user, logIn, logOut } = useAuth();

    if (req.method === "GET") {

        const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Projects`, {
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
            }
        });
        const { records } = await response.json();
        const posts = records.map(record => {
            return {
                id: record.id,
                ...record.fields
            }
        })
        res.status(200).json({ posts })
        return;
    }
    if (req.method === 'POST') {
        const { authorization } = req.headers
        // NEXT_PUBLIC_AUTH_ENDPOINT
        const auth = await fetch(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/user`, {
            headers: {
                Authorization: authorization
            }
        })
        const authJSON = await auth.json();
        if (!authJSON.id) {
            res.status(401).json({
                error: 'Invalid Token',
            })
            return;
        }
        const { content } = JSON.parse(req.body)
        const data = {
            records: [
                {
                    fields: {
                        content,
                        date: new Date().toISOString(),
                        account: user && user.email
                    }
                }
            ]
        }
        const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Projects`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        res.status(201).json({
            response
        })
        return;
    }
}