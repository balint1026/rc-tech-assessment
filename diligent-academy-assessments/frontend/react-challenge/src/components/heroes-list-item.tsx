import Hero from "../types/Hero";


    const HeroListItem: React.FC<Hero> = ({ id, name, available, toggleAvailability }) => {
        return (
            <li onClick={() => toggleAvailability(id)} style={{ cursor: "pointer" }}>
            <p className={available ? "available" : "unavailable"}>
                {id}.
                {name}
                {available ? " \"Available\"" : ""}</p>
          </li>
        );
    };



export default HeroListItem;