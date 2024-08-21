import { useState, useEffect } from "react";
import { callApi } from "../call-api";
import Hero from "../types/Hero";
import HeroesListItem from "./heroes-list-item";

function HeroesList() {
  const [heroes,setHeroes]  = useState<Hero[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await callApi<Hero[]>("heroes");
      setHeroes(data);
    };
    fetchData();
  }, []);
  return(
    <>
      <h2>Heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <HeroesListItem key={hero.id} id={hero.id} name={hero.name} available={hero.available} />
        ))}
      </ul>
    </>
  );
}

export default HeroesList;
