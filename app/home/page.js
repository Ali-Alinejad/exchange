"use client"


import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import DataSection from "./DataSection/page";
import NewsScroll from "./News/page";
import BannerCrypto from "./BannerCrypto/page";


export default function HomePage()
 {
    return (
        <>
<Navbar  className="absolute"/>
<NewsScroll/>
<Hero/>
<BannerCrypto />
<DataSection/>
</>
    );
}
