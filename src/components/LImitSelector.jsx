const LimitSelector = ({limit, onLimitChange}) => {
    return ( 
        <div className="mb-8 flex items-center justify-end gap-3">
        <label htmlFor="limit" className="font-bold">Show: </label>
        <select value={limit} name="limit" id="limit" onChange={(e) => onLimitChange(Number(e.target.value)) } className="px-4 py-2 rounded-lg bg-[#1c1f26] text-white border-none">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
     );
}
 
export default LimitSelector;