import Image from "../Image";

const CardTile = ({card}) => {
    return (
        <li>
            <Image/>
            <p>{card.id}</p>
            <p>{card.name}</p>
            <p>{card.deck}</p>
            <p>{card.edition}</p>
            <p>{card.type}</p>
        </li>
    );
}

export default CardTile