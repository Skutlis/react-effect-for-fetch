import React, { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";


export interface Advice{
  id: number;
  advice: string;
}

export interface Slip{
  slip: Advice
}

export const adviceURL = "	https://api.adviceslip.com/advice"
function AdviceSection() {
  const [randomAdvice, setRandomAdvice] = useState<Advice>({id: 1, advice: ""})
  const [favoriteAdvices, setFavoriteAdvices] = useState<Advice[]>([]) //Cache of favorite advices
  const [favoriteAdviceIDs, setFavoriteAdviceIds] = useState<number[]>([]) //Cache of favorite advice ids, which later could be moved to a db
  const [numRefresh, setNumRefresh] = useState(0) // Number of times the random advice is refreshed

  useEffect(() => {
    const fetchRandomAdvice = async () => {
      const response = await fetch(adviceURL);
      const jsonData : Slip = await response.json();
      const advice : Advice = {id: jsonData.slip.id, advice: jsonData.slip.advice}
      console.log(advice)
      setRandomAdvice(advice)
    }
    fetchRandomAdvice();
  }, [numRefresh])


  useEffect(() => {
    const fetchFavoriteAdvice = async (id) => {
      const response = await fetch(adviceURL + "/" + id);
      const jsonData : Slip = await response.json();
      const advice : Advice = {id: jsonData.slip.id, advice: jsonData.slip.advice}
      return advice;
    }
    const updatedFavorites = async () => {
      const favorites : Advice[]=  await Promise.all(favoriteAdviceIDs.map((id) => fetchFavoriteAdvice(id)));
      setFavoriteAdvices(favorites);
    }
    updatedFavorites();
    
  }, [favoriteAdviceIDs])


  const addFavorite = (id) => {
    setFavoriteAdviceIds([...favoriteAdviceIDs, id])
  }

  const refreshAdvice = () => {
    setNumRefresh(numRefresh + 1)
  }





  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={randomAdvice}
                    refreshAdvice={refreshAdvice}
                    addFavorite={addFavorite} />
      </section>
      <section className="favourtite-Slip-list">
        <FavoriteSlipsList advices={favoriteAdvices} />
      </section>
    </section>
  )
}

export default AdviceSection
