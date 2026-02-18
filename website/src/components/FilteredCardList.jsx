import cardData from '../assets/card-list.json'
import FilterCardForm from "./FilterCardForm";
import CardList from "./CardList"

const FilteredCardList = () => {
    return <>
        <search>
            <FilterCardForm/>
        </search>
        <CardList cards={cardData}/>
    </>;
}

export default FilteredCardList;