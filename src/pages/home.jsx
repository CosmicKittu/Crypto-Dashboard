import CoinCard from "../components/CoinCard";
import LimitSelector from "../components/LImitSelector";
import FilterInput from "../components/FilterInput";
import SortBy from "../components/SortBy";

const HomePage = ({
    coins,
    filter,
    setFilter,
    limit,
    setLimit,
    sortby,
    setSortBy,
    loading,
    error
}) => {
    const filteredCoin = coins.filter((coin) => 
     {
      return(
        coin.name.toLowerCase().includes(filter.toLowerCase()) || coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
     }
  )
  .slice()
  .sort((a, b) => {
    switch (sortby) {
      case 'market_cap_desc':
        return b.market_cap - a.market_cap;
      case 'price_desc':
        return b.current_price - a.current_price;
      case 'price_asc':
        return a.current_price - b.current_price;
      case 'change_desc':
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      case 'change_asc':
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
      default:
        return 0;
    }
  });
    return ( 
        <>
    <h1 className="mb-8 text-3xl font-bold">Crypto Dashboard 🚀</h1>
      {loading && <p>Loadding....</p>}
      {error && <p>there was an error</p>}

      <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">


      <FilterInput filter ={filter} onFilterChange={setFilter}/>
      <LimitSelector limit={limit} onLimitChange={setLimit} />
      <SortBy sortby={sortby} onSortChange={setSortBy}/>
        
      </div>

      {!loading && !error && ( filteredCoin.length > 0 ?

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCoin.map((coin)=>(
            <CoinCard key={coin.id} coin = {coin}/>
          ))}

        </div>
        : <p>No Matching Coin....</p>
      )}
    </>
     );
}
 
export default HomePage;