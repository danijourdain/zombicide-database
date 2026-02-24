import { useState } from 'react';

import CardTile from './CardTile';
import style from './CardList.module.css'
import CardPopup from './CardPopup';

const CardList = ({cards, headingText="Cards"}) => {
    const handleClick = (card) => {
        // return;
        console.log(card.id);
        setIsOpen(true);
    }

    // modal state handlind
    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const afterOpenModal = () => {
        console.log("MODAL OPENED");
    }

    return <>
        <h1>{headingText}</h1>
        <CardPopup
            isOpen={isOpen}
            onOpen={openModal}
            onClose={closeModal}
            onAfterOpen={afterOpenModal}
        ></CardPopup>
        <ul className={style.cardList}>
            { cards.map((card) => <CardTile key={card.id} card={card} onClick={handleClick}/>)}
        </ul>
    </>;
}

export default CardList;