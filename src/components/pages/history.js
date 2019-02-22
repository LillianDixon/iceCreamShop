import React from 'react'

import NavigationContainer from "../navigation/navigation-container"
import Bio from "../history/bio"
import HistoryPhoto from "../history/historyPhoto"
import IceCreamHistory from "../history/iceCreamHistory"
import FooterContainer from "../footer/footer"

export default function() {
    return (
        <div className="history-wrapper">
            <NavigationContainer url="url(https://files.slack.com/files-pri/T208051T5-FGE8D38HH/03a6dd63403181.5aafddd253d6e.jpg)"/>
            History
            <Bio />
            <HistoryPhoto />
            <IceCreamHistory />
        </div>
    )
}