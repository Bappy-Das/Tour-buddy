import React from 'react';
import './Places.css'

const Places = (props) => {
    // console.log(props.place)
    const { name, Duration, image, cost } = props.place;
    // let spotPlace = {};
    // for (const spot of attractions) {
    //     spotPlace = spot;
    // }


    return (
        <div>
            <div className="place-info">
                <img className="image" src={image} alt="" />
                <div className="card-info">
                    <div className="">
                        <h3>{name}</h3>
                        <h5>Tour Duration : {Duration}</h5>
                        <h5>Cost : {cost}$ Per Person</h5>
                        {/* <h5>Attraction :</h5> */}
                    </div>
                    <div className="attract-palce">

                        {/* {attractions.map(spot => <p> {spot}</p>)} */}
                        {/* <h5>{attractions}</h5> */}

                    </div>
                    <div className="btn-class">
                        <button className="common-btn">added</button>
                        <button className="common-btn">go</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Places;