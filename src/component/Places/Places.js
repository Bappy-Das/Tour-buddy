import React from 'react';
import './Places.css'

const Places = (props) => {
    // console.log(props.place)
    const { name, Duration, attractions, image, cost } = props.place;
    // let spotPlace = {};
    // for (const spot of attractions) {
    //     spotPlace = spot;
    // }


    return (
        <div>
            <div className="place-info">
                <img className="image" src={image} alt="" />
                <h3>{name}</h3>
                <h5>{Duration}</h5>
                {attractions.map(spot => <ul> {spot}</ul>)}
                {/* <h5>{attractions}</h5> */}
                <p>{cost}$</p>
            </div>
        </div>
    );
};

export default Places;