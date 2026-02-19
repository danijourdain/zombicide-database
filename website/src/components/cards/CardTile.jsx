import Image from "../Image";

const CardTile = ({card}) => {
    const imageSource = `src/assets/images/${card.edition}/${card.deck}/${card.name}.png`

    return (
        <li>
            <Image src={imageSource}/>
            <p>{card.id}</p>
            <p>{card.name}</p>
            <p>{card.deck}</p>
            <p>{card.edition}</p>
            <p>{card.type}</p>
        </li>
    );
}

export default CardTile