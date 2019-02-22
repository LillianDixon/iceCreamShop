import React from 'react';

import NavigationContainer from "../navigation/navigation-container";
import CateringDetails from "../catering/catering-details";
import CateringHeading from "../catering/catering-heading";



export default function() {
    return (
        <div className="catering-wrapper">
            {/* <NavigationContainer url="url(https://files.slack.com/files-pri/T208051T5-FGFDZJA3Z/2b4fea63403181.5aafddd25320f.jpg)"/> */}
           

            



            <div className="catering-heading">
                <CateringHeading />
            </div>

            <div className="top-catering-p">
                <CateringDetails />
            </div>

            
            <div className='catering-image-left'></div>
            <div className='catering-image-right'></div>
        </div>
    )
}