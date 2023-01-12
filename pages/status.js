export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=300');

    try {
        //txTracker Data
        const URL = 'http://localhost:3000/api/ping'
        const trackerResp = await fetch(URL);
        const trackerData = await trackerResp.json();

        return { props: trackerData };
    } catch (error) {
        return {

        };
    }
}


export default function Status(props) {
    return ( 
        <main>
            <h1>Status</h1>
            <p>Player Count: {props.playercount}</p>
        </main>
    );
}