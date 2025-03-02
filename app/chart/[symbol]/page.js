"use client";

import { useParams } from 'next/navigation';
import Navbar from "../../home/Navbar/page";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ChartPage() {
    const { symbol } = useParams();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [finalTheme, setFinalTheme] = useState(null);

    useEffect(() => {
        setMounted(true);
        setFinalTheme(theme || "light");
    }, [theme]);

    if (!mounted || !finalTheme || !symbol) {
        return <div className="flex items-center justify-center h-screen text-lg font-semibold">Loading...</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar className="absolute z-10" />
            <div className="mt-32 p-6 flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-6 py-3 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Market: <span className="text-blue-500">{symbol}</span></h1>
                </div>
                <div className="mt-6 w-full max-w-4xl p-4 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700">
                    <iframe
                        id="tradingview_chart"
                        name="tradingview_chart"
                        src={`https://www.tradingview.com/widgetembed/?symbol=BingX%3A${symbol}&interval=15&toolbarbg=0e0e0e&theme=${theme}`}
                        title="Financial Chart"
                        allow="transparency"
                        allowFullScreen
                        className="w-full h-[500px] rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}