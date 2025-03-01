"use client";

import { useParams } from 'next/navigation';
import Navbar from "../../home/Navbar/page";
import { useTheme } from 'next-themes';

export default function ChartPage() {
    const { symbol } = useParams();

    if (!symbol) {
        return <div>Loading...</div>;
    }
    const theme = useTheme();
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar className="absulote z-10" />
                <div className="mt-32 p-4">
                    <h1 className="flex items-center justify-center text-xl font-bold mb-4">Market: {symbol}</h1>
                    <div id="tv-chart" className="tv-chart">
                        <iframe
                            id="tradingview_a3623"
                            name="tradingview_a3623"
                            src={`https://www.tradingview.com/widgetembed/?symbol=BingX%3A${symbol}&interval=15&toolbarbg=0e0e0e&studiesAccess=%7B%22type%22%3A%22black%22%2C%22tools%22%3A%5B%7B%22name%22%3A%22Ratio%22%2C%22grayed%22%3Afalse%7D%2C%7B%22name%22%3A%22Spread%22%2C%22grayed%22%3Afalse%7D%2C%7B%22name%22%3A%22Correlation%20Coefficient%22%2C%22grayed%22%3Afalse%7D%5D%7D&widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&timeFrames=%5B%5D&locale=en&uid=tradingview_a3623&clientId=0&userId=0&chartsStorageVer=1.0&customCSS=https%3A%2F%2Fbingx.com%2Fcommon-assets%2Ftradingview%2Fversion27-01%2Ftv_custom.css%3Fv%3D1.10&autoSaveDelay=0.1&debug=false&timezone=Asia%2FTehran&theme=${theme.theme}`}
                            title="Financial Chart"
                            allow="transparency"
                            allowFullScreen=""
                            style={{ display: 'block', width: '100%', height: '500px' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
