"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/react";
import ThemeSwitcher from "../ThemeSwitcher/page";
import NextLink from "next/link";

// Fake data (replace with real data later)
const fakePrices = {
  BTC: { name: "Bitcoin", price: "$42,000", week: "$41,500", month: "$40,800", year: "$38,200" },
  ETH: { name: "Ethereum", price: "$3,200", week: "$3,100", month: "$3,050", year: "$2,800" },
  USDT: { name: "Tether", price: "$1.00", week: "$1.00", month: "$1.00", year: "$1.00" },
};

const fakeNews = {
  BTC: [
    { title: "Bitcoin Hits New High", source: "CoinDesk", content: "Bitcoin has hit a new all-time high in its price, crossing $42,000 for the first time.", link: "https://www.coindesk.com", impact: 90, date: "2025-03-10" },
    { title: "Bitcoin Adoption Growing", source: "CryptoNews", content: "Bitcoin adoption continues to grow globally, with more institutions accepting it.", link: "https://www.cryptonews.com", impact: 70, date: "2025-03-08" },
  ],
  ETH: [
    { title: "Ethereum 2.0 Update Released", source: "CryptoNews", content: "Ethereum 2.0 is now officially live with significant improvements to scalability.", link: "https://www.cryptonews.com", impact: 85, date: "2025-03-09" },
    { title: "Ethereum Price Surge", source: "CoinTelegraph", content: "Ethereum has seen a massive price surge due to increased network activity.", link: "https://www.cointelegraph.com", impact: 75, date: "2025-03-07" },
  ],
  USDT: [
    { title: "Tether's Growth Continues", source: "Bloomberg", content: "Tether's market cap continues to grow as it becomes the most widely used stablecoin in the crypto space.", link: "https://www.bloomberg.com", impact: 60, date: "2025-03-06" },
    { title: "USDT Pegged at $1", source: "CoinMarketCap", content: "USDT remains pegged at $1, with no major fluctuations in its value.", link: "https://www.coinmarketcap.com", impact: 50, date: "2025-03-05" },
  ],
};

export default function Predict() {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [sortedNews, setSortedNews] = useState(fakeNews[selectedCoin]);

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Sort news based on impact or date
  const sortNews = (criteria) => {
    let sorted = [...fakeNews[selectedCoin]];
    if (criteria === "impact") {
      sorted.sort((a, b) => b.impact - a.impact);
    } else if (criteria === "date") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedNews(sorted);
  };

  useEffect(() => {
    setSortedNews(fakeNews[selectedCoin]);
  }, [selectedCoin]);

  return (
    <motion.div className="relative flex flex-col md:flex-row max-w-full mx-auto p-8 gap-8 h-screen">
      {/* Sidebar with Currency List */}
      <motion.div
        className="w-full md:w-1/4 bg-gradient-to-r from-green-200 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-lg h-full"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-6 text-center">انتخاب ارز:</h2>
        <ul className="space-y-6">
          {Object.keys(fakePrices).map((coin) => (
            <li
              key={coin}
              className={`p-4 text-center rounded-lg cursor-pointer transition ${
                selectedCoin === coin ? "bg-blue-600 text-white" : "bg-green-300 dark:bg-gray-700 hover:bg-green-400"
              }`}
              onClick={() => setSelectedCoin(coin)}
            >
              {fakePrices[coin].name}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 flex flex-col gap-8 h-full">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {Object.entries(fakePrices[selectedCoin]).map(([key, value], index) =>
            key !== "name" ? (
              <Card key={index} className="p-6 text-center bg-white dark:bg-gray-800 shadow-xl hover:bg-blue-100 transition duration-300">
                <CardHeader>
                  <p className="text-gray-700 dark:text-gray-300">{key.toUpperCase()}</p>
                </CardHeader>
                <CardBody>
                  <span className="text-xl font-semibold">{value}</span>
                </CardBody>
              </Card>
            ) : null
          )}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* News Section */}
          <Card className="p-8 bg-white dark:bg-gray-900 shadow-xl hover:bg-blue-100 transition duration-300">
            <CardHeader>
              <p className="text-2xl font-bold">اخبار مرتبط</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => sortNews("impact")} className="bg-blue-500 text-white py-1 px-3 rounded-lg">بر اساس تاثیر</button>
                <button onClick={() => sortNews("date")} className="bg-blue-500 text-white py-1 px-3 rounded-lg">بر اساس تاریخ</button>
              </div>
            </CardHeader>
            <CardBody>
              <ul>
                {sortedNews.map((news, index) => (
                  <li key={index} className="border-b py-6">
                    <span className="font-bold">{news.title}</span> <br />
                    <span className="text-sm text-gray-500">{news.source}</span> <br />
                    <p className="text-gray-700 dark:text-gray-300">{news.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-lg ${news.impact > 70 ? 'text-green-500' : news.impact > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                        📈 تأثیر بازار : {news.impact}%
                      </span>
                      <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
                        بیشتر بخوانید
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          {/* AI Prediction Section */}
          <Card className="p-8 bg-blue-100 dark:bg-gray-700 text-center shadow-xl">
            <CardHeader>
              <p className="text-2xl font-bold">پیش بینی هوش مصنوعی (به زودی)</p>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-300">این بخش در آینده پیش بینی های مبتنی بر هوش مصنوعی را ارائه خواهد داد.</p>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Theme Switcher and Back to Homepage Button */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      <div className="absolute bottom-4 left-4">
        <NextLink href="/" passHref>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">بازگشت به صفحه اصلی</button>
        </NextLink>
      </div>
    </motion.div>
  );
}
