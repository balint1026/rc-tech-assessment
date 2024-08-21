import Hero from "../types/Hero";


    const HeroListItem: React.FC<Hero> = ({ id, name, available, toggleAvailability }) => {
        return (
            <li onClick={() => toggleAvailability(id)} style={{ cursor: "pointer" }}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Status: {available ? "Available" : "Unavailable"}</p>
          </li>
        );
    };



export default HeroListItem;