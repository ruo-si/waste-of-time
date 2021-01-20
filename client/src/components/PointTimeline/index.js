import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function PointTimeline(props) {
    return (
        <ProgressBar>
            <ProgressBar now={props.user.highScore} />
        </ProgressBar>
    )
};


export default PointTimeline;