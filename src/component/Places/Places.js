import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons'
import './Places.css'

const Places = (props) => {
    // console.log(props)
    const { name, Duration, attractions, location, image, cost } = props.place;
    const icon = <FontAwesomeIcon icon={faLuggageCart} />;

    return (
        <div className="main-card">
            <div className="place-info">
                <img className="image" src={image} alt="" />
                <h3>{name}</h3>

                <div className="card-info">
                    <div className="attract-palce">
                        <h5>Location : {location}</h5>
                        <h4>Travel Spot:</h4>
                        {attractions.map(spot => <p> {spot}</p>)}
                    </div>
                    <div>
                        <h5>Duration : {Duration}</h5>
                        <h5>Cost : {cost} tk Per</h5>
                    </div>

                </div>
                <div className="btn-class">
                    <button onClick={() => props.handleCLick(props.place)} className="common-btn"><span>{icon}</span> Book Now</button>
                </div>

            </div>
        </div >
    );
};

export default Places;