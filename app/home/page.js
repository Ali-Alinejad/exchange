import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import DataSection from "./DataSection/page";

export default function HomePage()
 {
    return (
        <>
<Navbar  className="absolute"/>
<Hero/>
<DataSection/>
</>
    );
}
