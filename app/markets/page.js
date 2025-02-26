import Navbar from "../home/Navbar/page";
import MarketList from "./marketList";

export default function Markets() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar className="z-10" />
            <div className="mt-16 p-4"> 
                <MarketList />
            </div>
        </div>
    );
}
