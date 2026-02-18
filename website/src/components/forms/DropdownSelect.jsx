const DropdownSelect = ({categories, onChange, nullOption, value}) => {
    return <select onChange={onChange} value={value}>
        <option key="default-value" value="">{nullOption}</option>
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
    </select>;
}

export default DropdownSelect;