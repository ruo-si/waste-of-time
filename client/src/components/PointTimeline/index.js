import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function PointTimeline(props) {
    return (
        <div>
            <ProgressBar now={props.user.gameScore} />
        </div>
    )
};


export default PointTimeline;