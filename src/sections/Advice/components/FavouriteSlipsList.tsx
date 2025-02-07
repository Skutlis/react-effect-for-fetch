import React from "react";
import { Advice } from "..";


export default function FavoriteSlipsList(props : {advices : Advice[]}) {

    return (
        <div>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {
                    props.advices.map((advice, index) => {
                        return <li key={index}>{advice.advice}</li>
                    })
                }
            </ul>
        </div>
    )
}