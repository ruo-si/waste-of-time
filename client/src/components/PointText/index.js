import React from 'react';
import "./style.css";


function PointText() {
    return (
        <>
            <div className="wrap">
                <div className="row points">
                    <div className="col">
                        <h4>25</h4>
                    </div>
                    <div className="col">
                        <h4>50</h4>
                    </div>
                    <div className="col">
                        <h4>75</h4>
                    </div>
                    <div className="col">
                        <h4>100</h4>
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