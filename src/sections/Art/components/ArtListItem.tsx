import React from "react";
import PublicationHistory from "./PublicationHistoryList";
import { Art, artBaseImageUrl } from "..";

interface ArtListItemProps{
    art: Art;
}

export default function ArtListItem(props : {art : Art}){
    
    return (
        <div>
            <div className="frame">
                <img
                    src={artBaseImageUrl + props.art.imageURL}
                />
            </div>
            <h3>{props.art.title}</h3>
            <p>{props.art.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistory pHistory={props.art.publicationHistory} key={1}/>
        </div>
    );
}