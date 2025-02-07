import React, { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

export interface Art {
  id: Number;
  title: string;
  artist: string;
  imageURL: string;
  publicationHistory: string[];
}

export const artURL = "https://boolean-uk-api-server.fly.dev/art"
export const artBaseImageUrl = "https://boolean-uk-api-server.fly.dev/"

function ArtsSection() {
  

  const [artCollection, setArtCollection] = useState<Art[]>([])

  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch(artURL);
      const jsonData : Art[] = await response.json();
      setArtCollection(jsonData);
    };
    fetchArt();
  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artCollection} />
      </div>
    </section>
  )
}

export default ArtsSection
