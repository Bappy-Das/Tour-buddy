import React from 'react';
// import { useState } from 'react/cjs/react.development';


const Budget = (props) => {

    const { budget } = props;
    const { placeName } = props;

    let totalCost = 0;
    for (const place of budget) {
        totalCost = totalCost + place.cost;
    }
    return (
        <div>
            <h1>Travel Place: {budget.length} </h1>
            <h3>Estimated Cost: {totalCost}</h3>
            <h3>Selected Place:</h3>
            <hr />
            {
                placeName.map(name => <p key={name}> {name}</p>)
            }
        </div>
    );
};

export default Budget;