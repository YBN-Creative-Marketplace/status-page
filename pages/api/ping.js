import PocketBase from 'pocketbase';
 
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }

    const pb = new PocketBase(process.env.DB_STRING);

    const data = {
        playercount: req.body.playercount,
    }
   
    const record = await pb.collection('tracker').create(data);

    console.log("server pinged")

    res.status(200).json({ record });
}
