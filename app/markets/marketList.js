"use client"
import MarketRow from "./marketRow";
import { useEffect, useState } from "react";
const MarketList = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isExtraLargeScreen, setIsExtraLargeScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
            setIsMediumScreen(window.innerWidth < 768);
            setIsExtraLargeScreen(window.innerWidth < 1280);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="m-8 p-4 rounded-lg">
            <div className="grid grid-cols-8 gap-4 pb-2 max-sm:grid-cols-2 max-md:grid-cols-4 max-xl:grid-cols-7 mx-20 pl-5 max-lg:mx-0 text-gray-400 text-sm">
                <div>Trading Pair</div>
                <div>Last Price</div>
                {(!isMediumScreen &&
                    <>
                        <div>24h Change</div>
                        <div>24h High</div>
                        <div>24h Low</div>
                        {(!isExtraLargeScreen && <div>24h Vol.</div>)}
                    </>
                )}
                {(!isSmallScreen &&  <><div>Market Cap</div>
                    <div>Action</div>
                </>)}
            </div>

            <MarketRow />
        </div>
    );
};

export default MarketList;
