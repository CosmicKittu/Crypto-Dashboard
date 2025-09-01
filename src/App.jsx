import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";
import LimitSelector from "./components/LImitSelector";
import FilterInput from "./components/FilterInput";
import SortBy from "./components/SortBy";

const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL)

// '&order=market_cap_desc&per_page=10&page=1&sparkline=false'

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortby, setSortBy] = useState('market_cap_desc')

  useEffect(() => {
    const fetchapi = async() => {
      try{
        const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
        if (!res.ok) throw new Error('failed to fetch data');
        const data = await res.json();
        // console.log(data);
        setCoins(data);


      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }
    fetchapi();
  }, [limit])

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
 
export default App;