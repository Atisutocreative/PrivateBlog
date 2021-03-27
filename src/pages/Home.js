import React from 'react';
import {useParams} from "react-router-dom";


function Home () {
    const { home } = useParams();

    return (
        <div>
            <h2>Home test</h2>
        </div>

    );
}

export default Home;