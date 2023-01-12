import { useState } from 'react';
 
export default function handler(req, res) {
    // if (req.method === 'GET') {
    //     // GET request
    //     res.status(200).json({ playercount: 100 });
    // }

    // if (req.method === 'POST') {
    //     // POST request
    //     setPlayercount(req.body.playercount);
    //     res.status(200);
    // }
    
    res.status(200).json({ playercount: 100 });
}
