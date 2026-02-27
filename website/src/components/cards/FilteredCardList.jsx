import { useSearchParams } from 'react-router-dom';

import cardData from '../../assets/card-list.json'
import FilterCardForm from "../forms/FilterCardForm";
import CardList from "./CardList";
import styles from "./FilteredCardList.module.css";

import { 
    filterCardsByType, 
    filterCardsByEdition,
    sortCardsById,
    sortCardsByName,
    getUniqueList,
    buildSearchResultsSection,
} from '../../utilities/cardFilterMethods';

const sortMethods = [
    {name: "Default", method: sortCardsById},
    {name: "Name", method: sortCardsByName}
];

const FilteredCardList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchText = searchParams.get("text") || "";
    const selectedType = searchParams.get("type") || "";
    const selectedEdition = searchParams.get("edition") || "";
    const selectedSortMethod = Number(searchParams.get("sort")) || 0;

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
    const sortedCards = sortMethods[selectedSortMethod].method([...filteredCards]);

    return <>
        <search className={styles.search}>
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
            buildSearchResultsSection(sortedCards, searchText).map(
                (section, index) => <CardList key={index} cards={section.entries}/>
            )
        :
            <CardList cards={sortedCards}/>
        }
    </>;
}

export default FilteredCardList;