import React from 'react'

import NavigationContainer from "../navigation/navigation-container"
import Bio from "../history/bio"
import HistoryPhoto from "../history/historyPhoto"
import IceCreamHistory from "../history/iceCreamHistory"

export default function() {
    return (
        <div className="history-wrapper">
                   <NavigationContainer url="url(https://files.slack.com/files-pri/T208051T5-FGDQHC725/9f742263403181.5aafddd2537da.jpg)"/>
        <div className='hero-section'>                      
        </div>
            History
            <Bio />
            <HistoryPhoto />
            <IceCreamHistory />
        </div>
    )
}