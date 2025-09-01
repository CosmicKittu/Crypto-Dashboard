const SortBy = ({sortby, onSortChange}) => {
    return ( 
        <>
        <div className="mb-8 flex items-center justify-end gap-3">
            <label htmlFor="sortby" className="font-bold">Sort By:</label>
            <select value={sortby} name="sortby" id="sortby" className="px-4 py-2 rounded-lg bg-[#1c1f26] text-white border-none" onChange={(e) => onSortChange(e.target.value)} >
                <option value='market_cap_desc'>Market Cap (High To Low)</option>
                <option value='market_cap_asc'>Market Cap (Low To High)</option>
                <option value='price_desc'>Price (High To Low)</option>
                <option value='price_asc'>Price (Low To High)</option>
                <option value='change_desc'>24h Change (High To Low)</option>
                <option value='change_asc'>24h Change (Low To High)</option>
            </select>
        </div>
        </>
     );
}
 
export default SortBy;