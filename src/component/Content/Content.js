import React, { useEffect, useState } from 'react';
import Budget from '../Budget/Budget';
import Places from '../Places/Places';
import './Content.css'

const Content = () => {
    const [tourSpot, setTourSpot] = useState([])
    const [budget, setBudget] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setTourSpot(data))
    }, []);

    const handleCLick = (place) => {
        const newCost = [...budget, place]
        setBudget(newCost);
    }


    return (
        <div className="main-content">
            <div className="travel-info">
                {
                    tourSpot.map(place => <Places
                        key={place.id}
                        place={place}
                        handleCLick={handleCLick}

                    ></Places>)
                }
            </div>
            <div className="travel-cost">
                <Budget budget={budget}></Budget>
            </div>
        </div>
    );
};

export default Content;
