import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Forecast() {
    const [data, setData] = useState([]); // an array of urls

    // we use the library axios to fetch the data from the url
    // axios is a promise based library that makes http requests

    useEffect( () => {
        // using async directly in the useEffect function isn't allowed.
        // an effect hook should return nothing or a clean up function, it cannot return a promise
        // so we define a function and call it
        const fetchData = async () => { // await can be used only inside async functions
            const result = await axios(
                'https://www.7timer.info/bin/api.pl?lon=35.213618&lat=31.771959&product=civillight&output=json'
            );
            console.log(result.data.dataseries);
            setData(result.data.dataseries);
        };
        fetchData();
    },[]); // array of dependencies: if the array is empty, the effect will only run once

    // note: we must generate keys for each item in the array
    // otherwise React will complain. Keys should be unique
    // and not change over time.
    return (
        <>
            <div>
                <button>show forecast</button>
            </div>
            <ul>
                {data.map(item => (
                    <li key={item.date}>
                        <a href={item.date}>{item.date}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}