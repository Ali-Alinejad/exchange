"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, link } from "@heroui/react";
import ThemeSwitcher from "../ThemeSwitcher/page";
import NextLink from "next/link";

const fakePrices = {
  BTC: { name: "Bitcoin", price: "$42,000", week: "$41,500", month: "$40,800", year: "$38,200" },
  ETH: { name: "Ethereum", price: "$3,200", week: "$3,100", month: "$3,050", year: "$2,800" },
  USDT: { name: "Tether", price: "$1.00", week: "$1.00", month: "$1.00", year: "$1.00" },
};

const fakeNews = {
  BTC: [
    { title: "Bitcoin Hits New High", source: "CoinDesk", content: "Bitcoin has hit a new all-time high in its price, crossing $42,000 for the first time.", link: "https://www.coindesk.com" },
    { title: "Bitcoin Adoption Growing", source: "CryptoNews", content: "Bitcoin adoption continues to grow globally, with more institutions accepting it.", link: "https://www.cryptonews.com" },
  ],
  ETH: [
    { title: "Ethereum 2.0 Update Released", source: "CryptoNews", content: "Ethereum 2.0 is now officially live with significant improvements to scalability.", link: "https://www.cryptonews.com" },
    { title: "Ethereum Price Surge", source: "CoinTelegraph", content: "Ethereum has seen a massive price surge due to increased network activity.", link: "https://www.cointelegraph.com" },
  ],
  USDT: [
    { title: "Tether's Growth Continues", source: "Bloomberg", content: "Tether's market cap continues to grow as it becomes the most widely used stablecoin in the crypto space.", link: "https://www.bloomberg.com" },
    { title: "USDT Pegged at $1", source: "CoinMarketCap", content: "USDT remains pegged at $1, with no major fluctuations in its value.", link: "https://www.coinmarketcap.com" },
  ],
};

export default function Predict() {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);



  return (
    <motion.div className="flex max-w-full mx-auto p-6 gap-6">
      {/* Sidebar with Currency List */}
      <motion.div
        className="w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold mb-4">Select a currency:</h2>
        <ul className="space-y-4">
          {Object.keys(fakePrices).map((coin) => (
            <li
              key={coin}
              className={`p-3 text-center rounded-md cursor-pointer transition ${selectedCoin === coin ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"}`}
              onClick={() => setSelectedCoin(coin)}
            >
              {fakePrices[coin].name}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="w-3/4 flex flex-col gap-6">
        {/* Top Section: Currency Information */}
        <motion.div
          className="grid grid-cols-4 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {Object.entries(fakePrices[selectedCoin]).map(([key, value], index) =>
            key !== "name" ? (
              <Card key={index} className="p-4 text-center shadow-lg hover:shadow-2xl transition duration-300">
                <CardHeader>
                  <p className="text-gray-600 dark:text-gray-300">{key.toUpperCase()}</p>
                </CardHeader>
                <CardBody>
                  <span className="text-lg font-bold">{value}</span>
                </CardBody>
              </Card>
            ) : null
          )}
        </motion.div>

        {/* Bottom Section: News & AI Prediction */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* News Section */}
          <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition duration-300">
            <CardHeader>
              <p className="text-xl font-semibold">Related News</p>
            </CardHeader>
            <CardBody>
              <ul>
                {fakeNews[selectedCoin].map((news, index) => (
                  <li key={index} className="border-b py-4">
                    <span className="font-medium">{news.title}</span> <br />
                    <span className="text-sm text-gray-500">{news.source}</span> <br />
                    <p className="text-gray-700 dark:text-gray-300">{news.content}</p>
                    <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">Read more</a>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          {/* AI Prediction Section */}
          <Card className="p-4 bg-gray-200 dark:bg-gray-700 text-center">
            <CardHeader>
              <p className="text-xl">AI Prediction (Coming Soon)</p>
            </CardHeader>
            <CardBody>
              <p className="text-gray-500 dark:text-gray-300">This section will provide AI-based predictions in the future.</p>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Theme Switcher in a better position */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      {/* Button to go back to the homepage */}
      <div className="absolute bottom-4 left-4">
        <NextLink href={`/`}>
        <button className="p-2 bg-blue-500 text-white rounded-md">Go to Homepage</button>

                                    </NextLink>
      </div>

      {/* Modal for News */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">News Details</h2>
            <p>{modalContent}</p>
            <button onClick={handleCloseModal} className="mt-4 p-2 bg-blue-500 text-white rounded-md">Close</button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
