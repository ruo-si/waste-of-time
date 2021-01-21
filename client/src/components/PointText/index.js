import React from 'react';
import "./style.css";


function PointText() {
    return (
        <>
            <div className="container">
                <div className="row points">
                    <div className="col">
                        <h4>75</h4>
                    </div>
                    <div className="col">
                        <h4>150</h4>
                    </div>
                    <div className="col">
                        <h4>225</h4>
                    </div>
                    <div className="col">
                        <h4>300</h4>
                    </div>
                </div>
                <div className="row tiers">
                    <div className="col">
                        <h5>First Tier</h5>
                    </div>
                    <div className="col">
                        <h5>Second Tier</h5>
                    </div>
                    <div className="col">
                        <h5>Third Tier</h5>
                    </div>
                    <div className="col">
                        <h5>Fourth Tier</h5>
                    </div>
                </div>

            </div>
        </>
    )
};


export default PointText;