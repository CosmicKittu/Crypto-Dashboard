const CoinCard = ({coin}) => {
    return ( 
        <div className="bg-[#161b22] p-6 rounded-xl shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1">
               <div className="flex items-center gap-4 mb-4">
                 <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                 <div>
                    <h2>{coin.name}</h2>
                    <p className="text-[0.9rem] text-[#aaa]">{coin.symbol.toUpperCase()}</p>
                 </div>
               </div>
               <p>Price: ${coin.current_price.toLocaleString()}</p>
               <p className={coin.price_change_percentage_24h >=0 ? "text-[#4caf50]" : "text-[#f44336]" }>{coin.price_change_percentage_24h.toFixed(2)}%</p>
               <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
            </div>
     );
}
 
export default CoinCard
;