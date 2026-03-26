import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <h2>Age: {props.age}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    );
};

export default Card;
