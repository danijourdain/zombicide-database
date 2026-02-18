import CardTile from './CardTile';

        const CardList = ({cards}) => {
    return <>
        <h1>Cards</h1>
        <ul>
            { cards.map((card) => <CardTile key={card.id} card={card} />)}
        </ul>
    </>;
}

export default CardList;