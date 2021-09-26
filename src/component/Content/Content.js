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
            {/* <div>
                <a href="/">hello link</a>
            </div> */}
            <div className="travel-info">
                {
                    places.map(place => <Places
                        key={place.id}
                        place={place}

                    ></Places>)
                }
            </div>
            <div className="travel-cost">
                <h1>Travel Place: </h1>
                <h3>Travel Cost: </h3>

            </div>
        </div>
    );
};

export default Content;
