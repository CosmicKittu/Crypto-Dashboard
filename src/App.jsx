import { useEffect, useState } from "react";

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchapi = async() => {
      try{
        const res = await fetch(API_URL);
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
  }, [])

  return ( 
    <>
    <h1 className="mb-8 text-3xl font-bold">Crypto Dashboard 🚀</h1>
      {loading && <p>Loadding....</p>}
      {error && <p>there was an error</p>}

      {!loading && !error && (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coins.map((coin)=>(
            <div className="bg-[#161b22] p-6 rounded-xl shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1" key= {coin.id}>
               <div className="flex items-center gap-4 mb-4">
                 <img src={coin.image} alt={coin.name} className="w-10 h-10" />
               </div>
            </div>
          ))}

        </div>
      )}
    </>
   );
}
 
export default App;