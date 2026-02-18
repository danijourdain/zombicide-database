const DropdownSelect = ({categories, onChange, nullOption, value}) => {
    return <select onChange={onChange} value={value}>
        <option selected value="">{nullOption}</option>
        {categories.map((category) => <option value={category}>{category}</option>)}
    </select>;
}

export default DropdownSelect;