import { Image } from "@heroui/react";

function Page() {
  return (
    <div className="relative w-full  h-[350px] overflow-hidden  max-sm:opacity-0">
      <Image
        src="./hero/bitcoin-digital-circuit-art.jpg"
        alt="Bitcoin Art"
        className="w-full h-full object-cover scale-105 ml-2 "
      />
      <div className="absolute max-md:h-[200px]  
      max-lg:h-[200px] max-xl:h-[220px] inset-0 bg-teal-100  z-10  overflow-hidden  mix-blend-hue max-sm:h-28 "></div>
    </div>
  );
}

export default Page;
