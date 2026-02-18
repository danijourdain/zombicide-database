const CardTile = ({card}) => {
    return (
        <li>
            <p>{card.id}</p>
            <p>{card.name}</p>
        </li>
    );
}

export default CardTile