import Image from "../Image";

const cardImages = import.meta.glob("/src/assets/images/**/*.png", {eager: true, import: "default"});

const CardTile = ({card}) => {    
    let imagePath = `/src/assets/images/${card.edition}/${card.deck}/${card.name}.png`;

    // handle case where card name starts with a .
    if(card.name.startsWith(".")) {
        const alteredName = card.name.substring(1);
        imagePath = `/src/assets/images/${card.edition}/${card.deck}/${alteredName}.png`
    }

    console.log(cardImages[imagePath]);
    const imageSource = cardImages[imagePath] ?? cardImages[encodeURIComponent(imagePath)];

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