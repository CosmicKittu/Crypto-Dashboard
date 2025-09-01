import { useEffect, useState } from "react";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

// console.log(API_URL)

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

  

  return ( 
    <Routes> 
      <Route path='/' element={<HomePage 
      coins={coins}
      filter={filter}
      setFilter={setFilter}
      limit={limit}
      setLimit={setLimit}
      sortby ={sortby}
      setSortBy={setSortBy}
      loading={loading}
      error={error}
      
      />}/>
    </Routes>
   );
}
 
export default App;