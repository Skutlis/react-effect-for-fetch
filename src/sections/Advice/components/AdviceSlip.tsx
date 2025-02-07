import React from "react";
import { Advice } from "..";



export default function AdviceSlip(props : {advice: Advice;
                                            refreshAdvice: () => void;
                                            addFavorite: (id : number) => void;
}){

    return (
        <div>
            <h3>Some Advice</h3>
            <p>{props.advice.advice}</p>
            <button onClick={() => props.refreshAdvice()}>Get More Advice</button>
            <button onClick={() => props.addFavorite(props.advice.id)}>Save to Favourties</button>
        </div>
    )
}