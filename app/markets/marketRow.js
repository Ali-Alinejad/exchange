const MarketRow = () => {
    return (
        <div className="mt-4 pl-5 grid grid-cols-8 gap-4 py-4 items-center text-sm text-black rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100">
            <div className="flex items-center">
                <span className="text-gray-400 text-lg hover:bg-">☆</span>
                <span className="ml-2 font-bold">BTCUSDT</span>
            </div>
            <div className="text-black">
                88,849.9
                <div className="text-gray-500 text-xs">88,733.81 USD</div>
            </div>
            <div className="text-red-500">-3.00%</div>
            <div>91,600.5</div>
            <div>86,043.8</div>
            <div>2.42B</div>
            <div>$1.86T</div>
            <div className="flex items-center space-x-2 -ml-6">
                <a href="#" className="text-blue-500 text-xs">Details</a>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs">Trade</button>
            </div>
        </div>
    );
};

export default MarketRow;
