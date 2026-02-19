import CardTile from './CardTile';

const CardList = ({cards, headingText="Cards"}) => {
    return <>
        <h1>{headingText}</h1>
        <ul className='card-list'>
            { cards.map((card) => <CardTile key={card.id} card={card} />)}
        </ul>
    </>;
}

export default CardList;