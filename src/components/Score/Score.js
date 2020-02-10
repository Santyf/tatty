import React from "react";
import "./Score.css";


function Score(props) {
    return (
        <div>
            <nav className='nav'>
                <h2 className='navBar-title'>Clicky Game</h2>
                <h2 className='navBar-begin'> {props.message} </h2>
                <h2 className='navBar-score'>Score: {props.score} | Top Score: {props.topScore}</h2>
            </nav>
        </div>
    )
}


export default Score;