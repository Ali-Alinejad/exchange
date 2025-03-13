import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/react";

// /components/Predict/CardsDetailCoins/PriceCard.js
export default function PriceCard({ title, value }) {
  return (
    <Card className="max-w-md bg-gray-100 dark:bg-gray-900 px-2 shadow-lg rounded-b-3xl rounded-t-none hover:translate-x-1 cursor-pointer transition-all duration-200">
      {/* عنوان */}
      <div className="text-center  font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </div>

      <Divider className="border-gray-300 dark:border-gray-600 my-2" />

      {/* مقدارها */}
      <div className="flex h-10 items-center justify-around text-sm">
        <Chip size="sm" color="success" className="text-black font-semibold">
          ${value}
        </Chip>

        <Divider orientation="vertical" className="border-gray-400 dark:border-gray-600" />

        <Chip color="warning" className="text-black font-semibold" size="sm">
          +{(value * 1.02).toFixed(2)}
        </Chip>

        <Divider orientation="vertical" className="border-gray-400 dark:border-gray-600" />

        <Chip size="sm" color="primary" className="text-black font-semibold ">
          -{(value * 0.98).toFixed(2)}
        </Chip>
      </div>
    </Card>
  );
}
