"use client";
import { motion } from "framer-motion";

const NewsScroll = () => {
  const newsItems = [
    "🚀 Bitcoin breaks $70K amid ETF inflows!",
    "📉 Ethereum gas fees spike as network activity surges!",
    "🔥 Solana hits new all-time high in daily transactions!",
    "💰 BlackRock expands crypto investment portfolio!",
    "🔍 SEC delays decision on Ethereum ETF approval!",
    "⚡️ Layer 2 adoption skyrockets with zk-rollups!",
    "🌍 Middle East moves towards crypto-friendly regulations!",
    "🔔 US Senate debates new crypto taxation framework!",
    "🛠 Ethereum 2.0 final phase upgrade announced!",
    "🎯 Crypto whales accumulate ahead of next halving cycle!",
    "🚀 Bitcoin breaks $70K amid ETF inflows!",
    "📉 Ethereum gas fees spike as network activity surges!",
    "🔥 Solana hits new all-time high in daily transactions!",
    "💰 BlackRock expands crypto investment portfolio!",
    "🔍 SEC delays decision on Ethereum ETF approval!",
    "⚡️ Layer 2 adoption skyrockets with zk-rollups!",
    "🌍 Middle East moves towards crypto-friendly regulations!",
    "🔔 US Senate debates new crypto taxation framework!",
    "🛠 Ethereum 2.0 final phase upgrade announced!",
    "🎯 Crypto whales accumulate ahead of next halving cycle!",
    "🚀 Bitcoin breaks $70K amid ETF inflows!",
    "📉 Ethereum gas fees spike as network activity surges!",
    "🔥 Solana hits new all-time high in daily transactions!",
    "💰 BlackRock expands crypto investment portfolio!",
    "🔍 SEC delays decision on Ethereum ETF approval!",
    "⚡️ Layer 2 adoption skyrockets with zk-rollups!",
    "🌍 Middle East moves towards crypto-friendly regulations!",
    "🔔 US Senate debates new crypto taxation framework!",
    "🛠 Ethereum 2.0 final phase upgrade announced!",
    "🎯 Crypto whales accumulate ahead of next halving cycle!",
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-2 overflow-hidden z-50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["10%", "-100%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        dir="ltr"
      >
        {newsItems.map((item, index) => (
          <span key={index} className="mx-8">{item}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsScroll;
