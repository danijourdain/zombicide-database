import { useState } from 'react';
import AddButton from "../AddButton";
import Image from "./Image";
import styles from './CardTile.module.css'

const BASE_URL = import.meta.env.BASE_URL;

const CardTile = ({card, onClick}) => {    
    let imagePath = BASE_URL + `images/${card.edition}/${card.deck}/${card.name}.png`;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleButtonClick = () => {
        console.log("ADD BUTTON CLICKED");
    };

    // handle case where card name starts with a .
    if(card.name.startsWith(".")) {
        const alteredName = card.name.substring(1);
        imagePath = BASE_URL + `images/${card.edition}/${card.deck}/${alteredName}.png`
    }

    return (
        <li 
            className={styles['card-tile']}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Image src={imagePath} onClick={() => onClick(card)} />
            {
                isHovered && (
                    <div className={styles['add-button-on-image']}>
                        <AddButton onClick={handleButtonClick}/>
                    </div>
                )
            }
        </li>
    );
}

export default CardTile