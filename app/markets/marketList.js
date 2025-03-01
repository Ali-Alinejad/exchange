import MarketRow from "./marketRow";

const MarketList = () => {
    return (
        <div className="m-8 p-4 rounded-lg">
            <div className="ml-5 grid grid-cols-8 gap-4 pb-2 text-gray-400 text-sm">
                <div>Trading Pair</div>
                <div>Last Price</div>
                <div>24h Change</div>
                <div>24h High</div>
                <div>24h Low</div>
                <div>24h Vol.</div>
                <div>Market Cap</div>
                <div>Action</div>
            </div>

            <MarketRow /> 
        </div>
    );
};

export default MarketList;
