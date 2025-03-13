// /components/Predict/Sidebar/Sidebar.js
export default function Sidebar({ selectedCoin, onSelectCoin }) {
  return (
    <div className="w-full md:w-1/4 bg-gray-800 text-white p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold">انتخاب ارز</h2>
      <ul>
        {["BTC", "ETH", "USDT"].map((coin) => (
          <li
            key={coin}
            className={`cursor-pointer p-2 ${coin === selectedCoin ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
            onClick={() => onSelectCoin(coin)}
          >
            {coin}
          </li>
        ))}
      </ul>
    </div>
  );
}
