import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function PointTimeline(props) {

// console.log(props.user.highScore)

    return (
        <div>
            <ProgressBar now={props.user.highScore} />
        </div>
    )
};


export default PointTimeline;