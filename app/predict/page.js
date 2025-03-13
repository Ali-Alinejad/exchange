"use client";

import Sidebar from './Sidebar/page';
import PriceCard from './CardDetailCoins/page';
import NewsCard from './NewsCoin/page';
import Prediction from './Ai/page';
import { useEffect, useState } from 'react';
import { useStore } from '../zustand/store';

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
    <div className="grid h-screen grid-cols-12 grid-rows-12 gap-2  bg-gray-950 overflow-hidden">
      
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
      {/* پیش‌بینی AI */}
      <div className="col-span-3 row-span-12 mt-4  bg-gray-900 text-white p-4 rounded-lg">
        <Sidebar selectedCoin={selectedCoin} onSelectCoin={setSelectedCoin} />
      </div>

      
    </div>
  );
}
