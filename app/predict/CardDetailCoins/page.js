import { Card } from "@heroui/card";
import { Chip } from "@heroui/chip";

// /components/Predict/CardsDetailCoins/PriceCard.js
export default function PriceCard({ title, value }) {

  return (
    <Card className="py-6 text-center bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition duration-300 rounded-lg">
      <h3 className=" font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>

      {/* درصد تغییر قیمت با Chip */}
      <Chip
        className={`mt-2 mx-auto text-black font-semibold   `}
        color="warning"
      >
         65% ▲ 
      </Chip>
    </Card>
  );
}
