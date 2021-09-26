import React from 'react';


const Budget = (props) => {
    const { budget } = props;
    // console.log(props.budget)

    let totalCost = 0;

    for (const place of budget) {
        totalCost = totalCost + place.cost;
        // setName(place.name)
    }
    return (
        <div>
            <h1>Travel Place: {budget.length} </h1>
            <h3>Travel Cost: {totalCost}</h3>
            <h3>Place Name: </h3>
        </div>
    );
};

export default Budget;