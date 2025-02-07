import React from "react";


export default function PublicationHistory(props : {pHistory: string[]}){

    return (
        <ul>
            {props.pHistory.map((pub, index) => {
                return <li key={index}>{pub}</li>
            })}
        </ul>
    )
}
