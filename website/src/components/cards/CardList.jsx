import { useState } from 'react';

import CardTile from './CardTile';
import style from './CardList.module.css'
import CardPopup from './CardPopup';

const CardList = ({cards, headingText="Cards"}) => {
    const handleClick = (card) => {
        // return;
        console.log(card.id);
        setIsOpen(true);
        setSelectedCard(card);
    }

    // modal state handlind
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    
    const closeModal = () => {
        setIsOpen(false);
        setSelectedCard(null);
    };

    return <>
        <h1>{headingText}</h1>
        <CardPopup
            isOpen={isOpen}
            onClose={closeModal}
            card={selectedCard}
        ></CardPopup>
        <ul className={style.cardList}>
            { cards.map((card) => <CardTile key={card.id} card={card} onClick={handleClick}/>)}
        </ul>
    </>;
}

export default CardList;