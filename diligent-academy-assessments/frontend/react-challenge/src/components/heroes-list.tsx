import { useState, useEffect } from "react";
import { callApi } from "../call-api";
import useFetch from "../hooks/useFetch";
import Hero from "../types/Hero";
import HeroesListItem from "./heroes-list-item";
import "../styles/HeroesList.css"

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false)

  const { data: fetchedHeroes, loading, error } = useFetch<Hero[]>(() => callApi<Hero[]>("heroes"));

  useEffect(() => {

    if (!isFetched){

      if (fetchedHeroes) {
        setHeroes(fetchedHeroes);
        setIsFetched(true);
      }
    }
  }, [fetchedHeroes, isFetched]);


  const toggleAvailability = (id: number) => {
    setHeroes((heroes) =>
      heroes.map((hero) =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  };

  if (error) {
    return <h2 style={{textAlign: "center"}}>{error}</h2>;
  }

  if (loading) {
    return <h2 style={{textAlign: "center"}}>Loading</h2>
  }

  return (
    <div className="heroes-container">
      <h2>Heroes</h2>
      <ul className="heroes-grid">
        {heroes.map((hero) => (
          <HeroesListItem
            key={hero.id}
            id={hero.id}
            name={hero.name}
            available={hero.available}
            toggleAvailability={toggleAvailability}
          />
        ))}
      </ul>
    </div>
  );
}

export default HeroesList;
