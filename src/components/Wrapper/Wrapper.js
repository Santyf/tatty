import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.herosClicked(props.id)}>
                <img className = "heroImg" alt={props.id} src={props.image} />
                {/* <button onClick={() => props.herosClicked(props.id)} className="btn">click me</button> */}


            </div>




        </div>
    )
};
export default Wrapper;