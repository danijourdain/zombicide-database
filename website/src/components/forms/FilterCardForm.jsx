import { bindValueEventSetter } from "../../utilities/eventHelpers";
import DropdownSelect from "./DropdownSelect";

const FilterCardForm = ({
    searchText, onSearchTextChanged, 
    selectedType, onSelectedTypeChanged, types,
    selectedEdition, onSelectedEditionChanged, editions,
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
            <DropdownSelect categories={types} nullOption="all types" onChange={bindValueEventSetter(onSelectedTypeChanged)} value={selectedType}/>
            <DropdownSelect categories={editions} nullOption="all editions" onChange={bindValueEventSetter(onSelectedEditionChanged)} value={selectedEdition}/>
        </fieldset>
    </form>;
}

export default FilterCardForm;