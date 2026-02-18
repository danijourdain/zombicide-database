import { bindValueEventSetter } from "../../utilities/eventHelpers";

const FilterCardForm = ({
    searchText, onSearchTextChanged,
    selectedType, onSelectedTypeChanged,
    selectedEdition, onSelectedEditionChanged,
    selectedSortMethod, onSelectedSortMethodChanged,
    sortMethodOptions
}) => {
    return <form onSubmit={e=>e.preventDefault()}>
        <fieldset>
            <legend>Search Entries</legend>
            <label>
                <input type="search" name="text"
                placeholder="Search..."
                maxLength="20"
                value={searchText}
                onChange={bindValueEventSetter(onSearchTextChanged)}/>
            </label>
        </fieldset>
    </form>;
}

export default FilterCardForm;