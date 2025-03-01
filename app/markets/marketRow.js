"use client"
const marketData = [
    {
        symbol: "BTCUSDT",
        price: "88,849.9",
        priceInUSD: "88,733.81 USD",
        percentageChange: "-3.00%",
        high: "91,600.5",
        low: "86,043.8",
        volume: "2.42B",
        marketCap: "$1.86T"
    },
    {
        symbol: "ETHUSDT",
        price: "1,700.5",
        priceInUSD: "1,690.23 USD",
        percentageChange: "+1.25%",
        high: "1,750.0",
        low: "1,650.0",
        volume: "1.5B",
        marketCap: "$200B"
    },
    {
        symbol: "XRPUSDT",
        price: "1.00",
        priceInUSD: "0.98 USD",
        percentageChange: "-0.50%",
        high: "1.05",
        low: "0.95",
        volume: "1.8B",
        marketCap: "$45B"
    },
    {
        symbol: "LTCUSDT",
        price: "150.25",
        priceInUSD: "149.75 USD",
        percentageChange: "-1.00%",
        high: "155.00",
        low: "145.00",
        volume: "800M",
        marketCap: "$10B"
    },
    {
        symbol: "ADAUSDT",
        price: "1.23",
        priceInUSD: "1.22 USD",
        percentageChange: "+0.60%",
        high: "1.30",
        low: "1.10",
        volume: "2.1B",
        marketCap: "$40B"
    },
    {
        symbol: "BNBUSDT",
        price: "300.00",
        priceInUSD: "298.50 USD",
        percentageChange: "-2.00%",
        high: "310.00",
        low: "290.00",
        volume: "1B",
        marketCap: "$50B"
    },
    {
        symbol: "SOLUSDT",
        price: "130.50",
        priceInUSD: "128.90 USD",
        percentageChange: "+1.50%",
        high: "135.00",
        low: "125.00",
        volume: "500M",
        marketCap: "$35B"
    },
    {
        symbol: "DOTUSDT",
        price: "20.75",
        priceInUSD: "20.50 USD",
        percentageChange: "+0.80%",
        high: "22.00",
        low: "19.50",
        volume: "700M",
        marketCap: "$18B"
    },
    {
        symbol: "DOGEUSDT",
        price: "0.075",
        priceInUSD: "0.073 USD",
        percentageChange: "-1.30%",
        high: "0.080",
        low: "0.070",
        volume: "5B",
        marketCap: "$10B"
    },
    {
        symbol: "SHIBUSDT",
        price: "0.00001",
        priceInUSD: "0.0000098 USD",
        percentageChange: "+2.50%",
        high: "0.000012",
        low: "0.000008",
        volume: "20B",
        marketCap: "$6B"
    },
    {
        symbol: "AVAXUSDT",
        price: "60.25",
        priceInUSD: "59.75 USD",
        percentageChange: "-0.80%",
        high: "65.00",
        low: "55.00",
        volume: "600M",
        marketCap: "$18B"
    },
    {
        symbol: "TRXUSDT",
        price: "0.070",
        priceInUSD: "0.068 USD",
        percentageChange: "-0.60%",
        high: "0.075",
        low: "0.065",
        volume: "2B",
        marketCap: "$7B"
    },
    {
        symbol: "LINKUSDT",
        price: "28.40",
        priceInUSD: "28.00 USD",
        percentageChange: "+0.70%",
        high: "30.00",
        low: "26.00",
        volume: "450M",
        marketCap: "$12B"
    },
    {
        symbol: "ZRXUSDT",
        price: "1.25",
        priceInUSD: "1.23 USD",
        percentageChange: "-0.30%",
        high: "1.35",
        low: "1.10",
        volume: "250M",
        marketCap: "$1.5B"
    }
];
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { Button } from '@heroui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

const MarketRow = () => {
    const { theme } = useTheme();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isExtraLargeScreen, setIsExtraLargeScreen] = useState(false);
    const router = useRouter();
    const handleNavigation = (symbol) => {

        router.push(`/chart/${symbol}`);
    };
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
        <div>
            {marketData.map((data, index) => (
                <div
                    key={data.symbol}
                    className={`${theme === 'dark' ? 'bg-slate-950 hover:bg-slate-900' : 'bg-gray-100 hover:bg-gray-200'} mt-1 pl-5 grid grid-cols-8 gap-4 max-sm:grid-cols-2 max-md:grid-cols-4 max-xl:grid-cols-7 mx-20 max-lg:mx-0 py-4 items-center text-sm rounded-xl shadow-sm cursor-pointer hover:bg-transparent transition-colors delay-30`}
                    onClick={() => handleNavigation(data.symbol)}
                >
                    <div className="flex items-center ">
                        <span className=" text-lg">☆</span>
                        <span className="ml-2 font-bold">{data.symbol}</span>
                    </div>
                    <div >
                        {data.price}
                        <div className="text-xs">{data.priceInUSD}</div>
                    </div>
                    {!isMediumScreen && (
                        <>
                            <div className={`  ${data.percentageChange.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                {data.percentageChange}
                            </div>
                            <div >{data.high}</div>
                            <div >{data.low}</div>
                            {(!isExtraLargeScreen && <div >{data.volume}</div>)}
                        </>
                    )}
                    {(!isSmallScreen && <><div >{data.marketCap}</div>
                        <div className="  flex items-center space-x-2 -ml-6">
                            <a href="#" className="text-xs">Details</a>
                            <NextLink href={`/chart/${data.symbol}`}>
                                <Button className="bg-transparent border-slate-700 font-bold text-slate-600 border-[1px] rounded-md text-xs min-w-[10px] px-2">
                                    Trade
                                </Button>
                            </NextLink>
                        </div>
                    </>)}
                </div>
            ))}
        </div>
    );
};

export default MarketRow;
