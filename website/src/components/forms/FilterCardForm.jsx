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
            <DropdownSelect categories={types} nullOption="All Types" onChange={bindValueEventSetter(onSelectedTypeChanged)} value={selectedType}/>
            <DropdownSelect categories={editions} nullOption="All Editions" onChange={bindValueEventSetter(onSelectedEditionChanged)} value={selectedEdition}/>
            <DropdownSelect categories={sortMethodOptions} onChange={bindValueEventSetter(onSelectedSortMethodChanged)} value={selectedSortMethod} labelKey="name" valueKey="method"/>
        </fieldset>
    </form>;
}

export default FilterCardForm;