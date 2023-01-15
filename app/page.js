import PocketBase from 'pocketbase';
import '../styles/index.css';

function getDateString(date) {
    let newDate = date.toISOString();
    newDate = newDate.replace('T', ' ');
    newDate = newDate.replace('Z', '');
    newDate = newDate.substring(0, newDate.length - 4);
    return newDate;
}

async function getData() {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const MS_PER_MINUTE = 60000;
    const FIVE_MIN = 60 * MS_PER_MINUTE;
    
    const date = getDateString(new Date(Date.now() - FIVE_MIN));
    const filter = `created > "${date}"`;

    const records = await pb.collection('tracker').getFullList(200, {
        sort: '-created',
        filter: filter,
    });

    return records;
}

export default async function HomePage() {
    const data = await getData()

    const overallPlayercount = data.reduce((acc, cur) => acc + cur.playercount, 0);

    console.log(overallPlayercount);

    return ( 
        <main className='homepage'>
            <h1>Status</h1>
            
        </main>
    );
}