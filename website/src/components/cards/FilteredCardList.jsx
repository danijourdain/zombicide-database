import { useSearchParams } from 'react-router-dom';

import cardData from '../../assets/card-list.json'
import FilterCardForm from "../forms/FilterCardForm";
import CardList from "./CardList"

import { 
    filterCardsByType, 
    filterCardsByEdition,
    sortCardsById,
    sortCardsByName,
    sortCardsByType,
    sortCardsByEdition,
    getUniqueList,
} from '../../utilities/cardFilterMethods';

const sortMethods = [
    {name: "Default", method: sortCardsById},
    {name: "Name", method: sortCardsByName},
    {name: "Type", method: sortCardsByType},
    {name: "Edition", method: sortCardsByEdition},
];

const FilteredCardList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchText = searchParams.get("text") || "";
    const selectedType = searchParams.get("type") || "";
    const selectedEdition = searchParams.get("edition") || "";
    const selectedSortMethod = searchParams.get("sort") || 0;

    const bindSearchParameterSetter = (paramName) => (value) => {
        let parameterObject = {
            ...searchText && {text: searchText},
            ...selectedType && {type: selectedType},
            ...selectedEdition && {edition: selectedEdition},
            ...selectedSortMethod && {sort: selectedSortMethod}
        };

        if (value) parameterObject[paramName] = value;
        else delete parameterObject[paramName];

        setSearchParams(parameterObject, {replace: true});
    }

    const handleSearchTextChanged = bindSearchParameterSetter("text");
    const handleSelectedTypeChanged = bindSearchParameterSetter("type");
    const handleSelectedEditionChanged = bindSearchParameterSetter("edition");
    const handleSelectedSortMethodChanged = bindSearchParameterSetter("sort");

    const typeFiltered = filterCardsByType(cardData, selectedType);
    const filteredCards = filterCardsByEdition(typeFiltered, selectedEdition);
    const sortedCards = sortMethods[selectedSortMethod].method(filteredCards);

    return <>
        <search>
            <FilterCardForm
              {...{searchText, selectedType, selectedEdition, selectedSortMethod}}
                types={getUniqueList(cardData, "type")}
                editions={getUniqueList(cardData, "edition")}
                onSearchTextChanged={handleSearchTextChanged}
                onSelectedTypeChanged={handleSelectedTypeChanged}
                onSelectedEditionChanged={handleSelectedEditionChanged}
                onSelectedSortMethodChanged={handleSelectedSortMethodChanged}
                sortMethodOptions={sortMethods}
            />
        </search>
        {searchText? 
            <h1>searched cards</h1>
        :
            <CardList cards={sortedCards}/>
        }
    </>;
}

export default FilteredCardList;