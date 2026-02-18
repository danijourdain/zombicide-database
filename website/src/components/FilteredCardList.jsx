import FilterCardForm from "./FilterCardForm";
import CardList from "./CardList"

const FilteredCardList = () => {
    return <>
        <search>
            <FilterCardForm />
        </search>
        <CardList />
    </>;
}

export default FilteredCardList;