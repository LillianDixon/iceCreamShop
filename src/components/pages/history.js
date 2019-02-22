import React from 'react'

import Bio from "../history/bio"
import HistoryPhoto from "../history/historyPhoto"
import IceCreamHistory from "../history/iceCreamHistory"

export default function() {
    return (
        <div className="history-wrapper">
            History
            <Bio />
            <HistoryPhoto />
            <IceCreamHistory />
        </div>
    )
}