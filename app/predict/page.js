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
    <div className="grid h-screen grid-cols-12 grid-rows-6 gap-4 p-4 bg-gray-100 overflow-hidden">
      
      {/* سایدبار */}
      <div className="col-span-3 row-span-6 bg-gray-800 text-white p-4 rounded-lg">
        <Sidebar selectedCoin={selectedCoin} onSelectCoin={setSelectedCoin} />
      </div>

      {/* بخش قیمت‌ها */}
      <div className="col-span-9 row-span-1 grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <PriceCard title="قیمت روز" value={fakePrices[selectedCoin].price} />
        <PriceCard title="هفته گذشته" value={fakePrices[selectedCoin].week} />
        <PriceCard title="ماه گذشته" value={fakePrices[selectedCoin].month} />
        <PriceCard title="سال گذشته" value={fakePrices[selectedCoin].year} />
      </div>

      <div className="col-span-5 row-span-5 bg-white p-4 rounded-lg shadow">
        <Prediction />
      </div>
      {/* اخبار */}
      <div className="col-span-4 row-span-5 bg-white p-4 rounded-lg shadow">
        <NewsCard news={fakeNews[selectedCoin]} />
      </div>

      {/* پیش‌بینی AI */}
     
      
    </div>
  );
}
