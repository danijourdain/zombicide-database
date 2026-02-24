import CardTile from './CardTile';
import style from './CardList.module.css'

const CardList = ({cards, headingText="Cards"}) => {
    return <>
        <h1>{headingText}</h1>
        <ul className={style.cardList}>
            { cards.map((card) => <CardTile key={card.id} card={card} />)}
        </ul>
    </>;
}

export default CardList;