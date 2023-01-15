import PocketBase from 'pocketbase';
 
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }

    const pb = new PocketBase('http://127.0.0.1:8090');

    const data = {
        playercount: req.body.playercount,
    }
   
    const record = await pb.collection('tracker').create(data);

    res.status(200).json({ record });
}
