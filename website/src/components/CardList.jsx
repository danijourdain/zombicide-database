import cardData from '../assets/card-list.json'
import CardTile from './CardTile';

const CardList = () => {
    return <>
        <h1>Cards</h1>
        <ul>
            {cardData.map((card) => <CardTile key={card.id} card={card} />)}
        </ul>
    </>;
}

export default CardList;