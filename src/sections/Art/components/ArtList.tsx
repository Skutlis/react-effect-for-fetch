import React from "react";
import { Art } from "..";
import ArtListItem from "./ArtListItem";


export default function ArtList(props : {artList : Art[]}){

    return (
        <ul className="art-list">
        <li>
            {props.artList.map((art, index) => {
                return <ArtListItem art={art} key={index} />
            })}
        </li>
        </ul>
    )
}