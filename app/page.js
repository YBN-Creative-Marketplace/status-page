import PocketBase from 'pocketbase';

async function getData() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const records = await pb.collection('tracker').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return records;
}

export default async function Status() {
    const data = await getData()

    return ( 
        <main>
            <h1>Status</h1>
            {data.map((record) => (
                <span>Playercount: {record.playercount}</span>
            ))}
        </main>
    );
}