import React, { useState } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Listbox, ListboxItem, Chip } from "@heroui/react";
import { useStore } from "../../zustand/store"; // ✅ Import Zustand store

export default function Sidebar() {
  // دریافت selectedCoin و fakePrices از Zustand
  const { selectedCoin, setSelectedCoin, fakePrices } = useStore();

  // استفاده از داده‌های مربوط به selectedCoin
  const coinData = fakePrices[selectedCoin] || null;
  const price = coinData?.price ?? "N/A";
  const yearPrice = coinData?.year ?? "N/A";

  // لیست ارزها
  const coins = [
    { id: "BTC", label: "Bitcoin (BTC)" },
    { id: "ETH", label: "Ethereum (ETH)" },
    { id: "USDT", label: "Tether (USDT)" },
    { id: "BNB", label: "Binance Coin (BNB)" },
    { id: "XRP", label: "XRP (XRP)" },
    { id: "ADA", label: "Cardano (ADA)" },
    { id: "DOGE", label: "Dogecoin (DOGE)" },
    { id: "SOL", label: "Solana (SOL)" },
    { id: "DOT", label: "Polkadot (DOT)" },
    { id: "MATIC", label: "Polygon (MATIC)" },
    { id: "LTC", label: "Litecoin (LTC)" },
    { id: "BCH", label: "Bitcoin Cash (BCH)" },
  ];

  const [inputValue, setInputValue] = useState(""); 


  const filteredCoins = coins.filter((coin) =>
    coin.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const selectedCoinData = coins.find((c) => c.id === selectedCoin) || null;

  return (
    <div className="text-center text-black dark:text-white p-8">
      <h2 className="text-xl font-semibold mb-4">Coins</h2>


      <Autocomplete
        className="max-w-xs text-black rounded-xl dark:bg-gray-900 shadow-sm border-none"
        items={filteredCoins} 
        label="Search Coins"
        variant="bordered"
        inputValue={inputValue} // مقدار ورودی
        onInputChange={(value) => setInputValue(value)} // بروزرسانی مقدار ورودی
        onSelectionChange={(id) => {
          if (coins.some((coin) => coin.id === id)) {
            setSelectedCoin(id); // ✅ مقدار رو در Zustand ذخیره کن
          }
        }}
      >
        {(item) => <AutocompleteItem key={item.id}>{item.label}</AutocompleteItem>}
      </Autocomplete>

      {selectedCoinData && (
        <div className="mt-4 ">
          <Chip color="primary" className="text-white ">
            {selectedCoinData.label}
          </Chip>
        </div>
      )}

      {/* لیست انتخاب ارز (single selection) */}
      <div className="w-full max-w-xs mx-auto  border dark:border-gray-700 bg-white dark:bg-transparent  shadow-lg rounded-2xl  mt-4">
        <Listbox
          classNames={{ base: "max-w-xs", list: "max-h-[60vh]  overflow-y-scroll gap-4 " }}
          items={coins}
          label="Select Coins"
          selectionMode="single"
          variant="flat"
          onSelectionChange={(ids) => {
            const selected = Array.from(ids)[0]; // ✅ دریافت اولین مقدار (چون single select هست)
            if (coins.some((coin) => coin.id === selected)) {
              setSelectedCoin(selected || null);
            }
          }}
        >
          {(item) => <ListboxItem key={item.id} className=" py-4 shadow-inner  ">{item.label}</ListboxItem>}
        </Listbox>
      </div>
    </div>
  );
}
