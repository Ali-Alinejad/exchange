"use client";

import Sidebar from './Sidebar/page';
import PriceCard from './CardDetailCoins/page';
import NewsCard from './NewsCoin/page';
import Prediction from './Ai/page';
import { useEffect, useState } from 'react';
import { useStore } from '../zustand/store';

export default function Predict() {
  const { fakePrices, fakeNews, selectedCoin, setSelectedCoin } = useStore();
  const [isClient, setIsClient] = useState(false); // برای اطمینان از اجرای کد در سمت کلاینت

  useEffect(() => {
    setIsClient(true); // هنگامی که صفحه در سمت کلاینت بارگذاری شد
  }, []);

  if (!isClient) {
    return null; // در هنگام رندرینگ در سرور چیزی نمایش داده نمی‌شود
  }

  return (
    <div className="flex gap-8 p-8">
      <Sidebar selectedCoin={selectedCoin} onSelectCoin={setSelectedCoin} />

      <div className="w-full md:w-3/4 flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(fakePrices[selectedCoin]).map(([key, value], index) => (
            <PriceCard key={index} title={key} value={value} />
          ))}
        </div>

        <NewsCard news={fakeNews[selectedCoin]} />

        <Prediction />
      </div>
    </div>
  );
}
