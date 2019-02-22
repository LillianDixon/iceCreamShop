import React from 'react';

import CateringDetails from "../catering/catering-details";
import CateringHeading from "../catering/catering-heading";
import FooterContainer from "../footer/footer"

export default function() {
    return (
        <div className="catering-wrapper">
            <NavigationContainer url=""/>
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