const FilterInput = ({filter, onFilterChange}) => {
    return ( 
        <div className="filter flex-1 mb-8">
            <input type="text" value={filter} onChange={(e) => onFilterChange(e.target.value) } className="w-full p-3 rounded-lg border-none bg-[#1c1f26] text-white text-base" placeholder="Search..."/>
        </div>
     );
}
 
export default FilterInput;