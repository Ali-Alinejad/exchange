const MarketRow = () => {
    return (
        <div className="grid grid-cols-8 gap-4 py-4 items-center text-sm text-black ">
            <div className="flex items-center">
                <span className="text-gray-400 text-lg">☆</span>
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
            <div className="flex items-center space-x-2">
                <a href="#" className="text-blue-500 text-xs">Details</a>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs">Trade</button>
            </div>
        </div>
    );
};

export default MarketRow;
