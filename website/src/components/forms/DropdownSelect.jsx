const DropdownSelect = ({categories, onChange, nullOption, value}) => {
    return <select id={categories} onChange={onChange} value={value}>
        {nullOption && <option key="default-value" value="">{nullOption}</option>}
        
        {categories.map((category, index) => {
            const isObject = typeof category === "object";
            const label = isObject ? category.name : category;
            const idx = isObject ? index : category;

            return <option key={idx} value={idx}>{label}</option>;
        })}
    </select>;
}

export default DropdownSelect;