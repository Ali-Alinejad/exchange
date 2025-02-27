import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import DataSection from "./DataSection/page";
import NewsScroll from "./News/page";

export default function HomePage()
 {
    return (
        <>
<Navbar  className="absolute"/>
<NewsScroll/>
<Hero/>
<DataSection/>
</>
    );
}
