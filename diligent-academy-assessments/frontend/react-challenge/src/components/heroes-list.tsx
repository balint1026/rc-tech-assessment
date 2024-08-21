import { useState, useEffect } from "react";
import { callApi } from "../call-api";
import Hero from "../types/Hero";
import HeroesListItem from "./heroes-list-item";

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi<Hero[]>("heroes");
        setHeroes(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch heroes.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const toggleAvailability = (id: number) => {
    setHeroes((heroes) =>
      heroes.map((hero) =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  };

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading) {
    return <h2>Loading</h2>
  }

  return (
    <>
      <h2>Heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <HeroesListItem
            key={hero.id}
            id={hero.id} name={hero.name}
            available={hero.available}
            toggleAvailability={toggleAvailability} />
        ))}
      </ul>
    </>
  );
}

export default HeroesList;
