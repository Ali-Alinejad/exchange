// /components/Predict/CardsDetailCoins/PriceCard.js
export default function PriceCard({ title, value }) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 shadow-xl hover:bg-blue-100 transition duration-300">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl">{value}</p>
      </div>
    );
  }
  