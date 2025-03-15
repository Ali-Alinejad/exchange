"use client";
import NextLink from "next/link";
import Sidebar from './Sidebar/page';
import PriceCard from './CardDetailCoins/page';
import NewsCard from './NewsCoin/page';
import Prediction from './Ai/page';
import { useEffect, useState } from 'react';
import { useStore } from '../zustand/store';
import ThemeSwitcher from '../ThemeSwitcher/page';
import { Chip } from "@heroui/react";
import { LucideCircleArrowOutUpLeft } from "lucide-react";
import { LuForward } from "react-icons/lu";

export default function Predict() {
  const { fakePrices, fakeNews, selectedCoin, setSelectedCoin } = useStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="grid h-screen grid-cols-12 grid-rows-12 gap-2  dark:bg-gray-950 overflow-hidden">
      
      {/* سایدبار */}
   
      {/* بخش قیمت‌ها */}
      <div className="col-span-12 h-20  z-10 row-span-1 grid grid-cols-1 lg:grid-cols-5 gap-4  ">
      <PriceCard title="سال گذشته" value={fakePrices[selectedCoin].year} />
        <PriceCard title="قیمت روز" value={fakePrices[selectedCoin].price} />
        <PriceCard title="هفته گذشته" value={fakePrices[selectedCoin].week} />
        <PriceCard title="ماه گذشته" value={fakePrices[selectedCoin].month} />
        <PriceCard title="سال گذشته" value={fakePrices[selectedCoin].year} />
      </div>

     
      {/* اخبار */}
      <div className="col-span-3 row-span-12 mt-4 ">
        <NewsCard news={fakeNews[selectedCoin]} />
      </div>
      <div className="col-span-6 row-span-12 mt-4 ">
        <Prediction />
      </div>
      <div className="col-span-3 row-span-12 mt-4  bg-gray-100 dark:bg-gray-900 text-white p-4 rounded-lg">


        <Sidebar selectedCoin={selectedCoin} onSelectCoin={setSelectedCoin} />

<div className="flex w-full justify-center gap-4">
        <ThemeSwitcher/>
        <NextLink href="/" >
        <Chip variant="dot">
        <LuForward  className="text-black scale-[1.7]  dark:text-white" />
        </Chip>
        </NextLink>
        </div>
      </div>

      
    </div>
  );
}
