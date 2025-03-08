"use client"


import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import DataSection from "./DataSection/page";
import NewsScroll from "./News/page";
import BannerCrypto from "./BannerCrypto/page";

import Intro from "./Intro/page";


export default function HomePage()
 {
    return (
        <>
<Navbar  className="absolute z-[125450]"/>
<NewsScroll/>
<Hero/>
<BannerCrypto />
<DataSection className/>
<Intro/>
</>
    );
}
