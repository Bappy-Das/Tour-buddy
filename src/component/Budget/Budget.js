import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Budget = (props) => {
    const icon = <FontAwesomeIcon icon={faMapMarkerAlt} />;

    const { budget } = props;
    const { placeName } = props;

    let totalCost = 0;
    for (const place of budget) {
        totalCost = totalCost + place.cost;
    }
    return (
        <div className="estimated-cost">
            <h2>Travel Place: {budget.length} </h2>
            <h3>Estimated Cost: {totalCost} tk</h3>
            <h3>Selected Place:</h3>
            <hr />
            {
                placeName.map(name => <p key={name}>{icon} {name}</p>)
            }
        </div>
    );
};

export default Budget;