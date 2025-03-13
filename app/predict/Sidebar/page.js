import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";

export default function Sidebar({ selectedCoin, onSelectCoin }) {
  const coins = [
    { id: "BTC", label: "Bitcoin (BTC)" },
    { id: "ETH", label: "Ethereum (ETH)" },
    { id: "USDT", label: "Tether (USDT)" },
  ];

  return (
    <div className="  text-center text-white p-8  l">
      <h2 className="text-xl font-semibold mb-4">Coins</h2>

      <Autocomplete
        className="max-w-xs "
        items={coins} // مقدار درست برای `items`
        label="list of coins"
        variant="bordered"
        onSelectionChange={(id) => onSelectCoin(id)} // ارسال مقدار انتخاب‌شده
      >
        {(item) => <AutocompleteItem key={item.id}>{item.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}
