import React from 'react';

function Item(props) {
    return (
        <div style={{backgroundColor: props.backgroundColor}}>
            <h2>Weapon: {props.title}</h2>
            <h3>Subtype: {props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}
export default Item