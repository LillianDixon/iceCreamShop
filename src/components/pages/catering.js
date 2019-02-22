import React from 'react';

import CateringDetails from "../catering/catering-details";
import CateringHeading from "../catering/catering-heading";

export default function() {
    return (
        <div class="catering-wrapper">
            Catering

            <div className="catering-heading">
                <CateringHeading />
            </div>

            <div className="top-catering-p">
                <CateringDetails />
            </div>

            <div className="bottom-catering-p">
                <CateringDetails />
            </div>
            
        </div>
    )
}