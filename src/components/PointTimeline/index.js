import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function PointTimeline() {
    return (
        <ProgressBar>
            <ProgressBar now={60} />
        </ProgressBar>
    )
};


export default PointTimeline;