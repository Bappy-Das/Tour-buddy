import React, { useEffect, useState } from 'react';
import Places from '../Places/Places';
import './Content.css'

const Content = () => {
    const [places, setPlace] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])
    return (
        <div className="main-content">

            {
                places.map(place => <Places

                    place={place}

                ></Places>)
            }

        </div>
    );
};

export default Content;
