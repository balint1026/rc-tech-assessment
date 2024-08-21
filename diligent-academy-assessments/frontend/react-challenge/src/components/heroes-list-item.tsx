import Hero from "../types/Hero";


    const HeroListItem: React.FC<Hero> = ({ id, name, available }) => {
        return (
            <li>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Status: {available ? "Available" : "Unavailable"}</p>
            </li>
        );
    };



export default HeroListItem;