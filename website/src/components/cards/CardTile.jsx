import Image from "../Image";

const cardImages = import.meta.glob("/src/assets/images/**/*.png", {eager: true, import: "default"});

const CardTile = ({card}) => {
    const imagePath = `src/assets/images/${card.edition}/${card.deck}/${card.name}.png`
    const imageSource = cardImages[imagePath];

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