import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function PointTimeline(props) {
    return (
        <div>
            <ProgressBar now={props.user.highScore+30} />
        </div>
        
    )
};


export default PointTimeline;