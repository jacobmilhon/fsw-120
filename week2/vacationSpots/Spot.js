import React from 'react'

function Spot(props) {
    function sign(amount) {
        if(amount >= 1000) {
            return "$$$"
        } else if (amount > 500 && amount < 1000) {
            return "$$"
        } else {
            return "$"
        }
    }

    function TimeOfYear(season) {
        if (season === "Spring") {
            return "MediumSpringGreen"
        } else if(season === "Winter") {
            return "PowderBlue"
        } else if (season === "Summer") {
            return "Yellow"
        } else if (season === "Fall") {
            return "Wheat"
        } else {
            return "White"
        }
    }

    return (
        <div style={{backgroundColor: TimeOfYear(props.timeToGo)}}>
            <h2>{props.place} {sign(props.price)}</h2>
        </div>
    )
}

export default Spot