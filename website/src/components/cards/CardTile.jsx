import Image from "../Image";

const BASE_URL = import.meta.env.BASE_URL;

const CardTile = ({card}) => {    
    let imagePath = BASE_URL + `images/${card.edition}/${card.deck}/${card.name}.png`;

    // handle case where card name starts with a .
    if(card.name.startsWith(".")) {
        const alteredName = card.name.substring(1);
        imagePath = BASE_URL + `images/${card.edition}/${card.deck}/${alteredName}.png`
    }

    return (
        <li>
            <Image src={imagePath}/>
            {/* <p>{card.id}</p>
            <p>{card.name}</p>
            <p>{card.deck}</p>
            <p>{card.edition}</p>
            <p>{card.type}</p> */}
        </li>
    );
}

export default CardTile