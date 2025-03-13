import { create } from 'zustand';

export const useStore = create((set) => ({
  fakePrices: {
    BTC: { name: 'Bitcoin', price: 42.000, week: 41.500, month: 40.800, year: 38.200 },
    ETH: { name: 'Ethereum', price: '$3,200', week: '$3,100', month: '$3,050', year: '$2,800' },
    USDT: { name: 'Tether', price: '$1.00', week: '$1.00', month: '$1.00', year: '$1.00' },
    BNB: { name: 'Binance Coin', price: '$400', week: '$390', month: '$380', year: '$350' },
    XRP: { name: 'XRP', price: '$1.25', week: '$1.20', month: '$1.15', year: '$1.00' },
    ADA: { name: 'Cardano', price: '$2.50', week: '$2.40', month: '$2.30', year: '$2.00' },
    DOGE: { name: 'Dogecoin', price: '$0.35', week: '$0.33', month: '$0.30', year: '$0.25' },
    SOL: { name: 'Solana', price: '$100', week: '$95', month: '$90', year: '$80' },
    DOT: { name: 'Polkadot', price: '$35', week: '$33', month: '$30', year: '$28' },
    MATIC: { name: 'Polygon', price: '$1.50', week: '$1.40', month: '$1.30', year: '$1.00' },
    LTC: { name: 'Litecoin', price: '$150', week: '$145', month: '$140', year: '$130' },
    BCH: { name: 'Bitcoin Cash', price: '$600', week: '$580', month: '$550', year: '$500' },
  },
  fakeNews: {
    BTC: [
      { 
        title: 'Bitcoin Hits New High', 
        source: 'CoinDesk', 
        content: 'Bitcoin has hit a new all-time high.', 
        link: 'https://www.coindesk.com', 
        date: '2025-03-13', 
        impact: 90, 
        type: 'positive'
      },
      { 
        title: 'Bitcoin Adoption Growing', 
        source: 'CryptoNews', 
        content: 'Bitcoin adoption continues to grow worldwide.', 
        link: 'https://www.cryptonews.com', 
        date: '2025-03-12', 
        impact: 80, 
        type: 'positive'
      },
      { 
        title: 'Bitcoin ETF Approval Coming Soon', 
        source: 'Bloomberg', 
        content: 'The SEC is expected to approve Bitcoin ETFs by the end of the year.', 
        link: 'https://www.bloomberg.com', 
        date: '2025-03-10', 
        impact: 85, 
        type: 'positive'
      },
      { 
        title: 'Bitcoin’s Energy Consumption Debate', 
        source: 'CoinTelegraph', 
        content: 'The debate about Bitcoin’s energy consumption continues to heat up.', 
        link: 'https://www.cointelegraph.com', 
        date: '2025-03-09', 
        impact: 70, 
        type: 'negative'
      },
      { 
        title: 'Bitcoin Price Volatility Continues', 
        source: 'CoinMarketCap', 
        content: 'Bitcoin’s price continues to show high volatility amidst global economic uncertainty.', 
        link: 'https://www.coinmarketcap.com', 
        date: '2025-03-08', 
        impact: 75, 
        type: 'negative'
      },
      { 
        title: 'Bitcoin Network Fees Surge', 
        source: 'CryptoCompare', 
        content: 'Transaction fees on the Bitcoin network have surged due to high demand.', 
        link: 'https://www.cryptocompare.com', 
        date: '2025-03-07', 
        impact: 65, 
        type: 'negative'
      },
      { 
        title: 'Bitcoin Regulation in Asia', 
        source: 'Asia Crypto News', 
        content: 'Countries in Asia are tightening regulations on Bitcoin transactions.', 
        link: 'https://www.asiacryptonews.com', 
        date: '2025-03-06', 
        impact: 60, 
        type: 'negative'
      },
      { 
        title: 'Bitcoin Blockchain Upgrades', 
        source: 'TechCrunch', 
        content: 'Bitcoin’s blockchain is getting several new upgrades this year.', 
        link: 'https://www.techcrunch.com', 
        date: '2025-03-05', 
        impact: 50, 
        type: 'positive'
      },
      { 
        title: 'Bitcoin Dominance Continues to Rise', 
        source: 'The Block', 
        content: 'Bitcoin’s market dominance continues to rise as altcoins struggle.', 
        link: 'https://www.theblock.com', 
        date: '2025-03-04', 
        impact: 55, 
        type: 'positive'
      },
      { 
        title: 'Bitcoin Mining Becomes More Efficient', 
        source: 'Mining Crypto News', 
        content: 'Bitcoin mining is becoming more efficient due to new hardware innovations.', 
        link: 'https://www.miningcryptonews.com', 
        date: '2025-03-03', 
        impact: 65, 
        type: 'positive'
      },
    ],
    ETH: [
      { 
        title: 'Ethereum 2.0 Update Released', 
        source: 'CryptoNews', 
        content: 'Ethereum 2.0 is now live, and its proof-of-stake mechanism is working.', 
        link: 'https://www.cryptonews.com', 
        date: '2025-03-13', 
        impact: 85, 
        type: 'positive'
      },
      { 
        title: 'Ethereum Price Surge Expected', 
        source: 'CoinTelegraph', 
        content: 'Experts predict Ethereum price will surge following the Ethereum 2.0 upgrade.', 
        link: 'https://www.cointelegraph.com', 
        date: '2025-03-12', 
        impact: 80, 
        type: 'positive'
      },
      { 
        title: 'Ethereum Network Scaling Solutions', 
        source: 'CoinDesk', 
        content: 'Ethereum developers are working on better scaling solutions to handle increased demand.', 
        link: 'https://www.coindesk.com', 
        date: '2025-03-11', 
        impact: 75, 
        type: 'positive'
      },
      { 
        title: 'Ethereum Gas Fees Reach New Heights', 
        source: 'CryptoCompare', 
        content: 'Gas fees on the Ethereum network have reached an all-time high due to network congestion.', 
        link: 'https://www.cryptocompare.com', 
        date: '2025-03-10', 
        impact: 70, 
        type: 'negative'
      },
      { 
        title: 'Ethereum DeFi Projects on the Rise', 
        source: 'The Block', 
        content: 'DeFi projects on Ethereum continue to grow exponentially, leading to increased network usage.', 
        link: 'https://www.theblock.com', 
        date: '2025-03-09', 
        impact: 65, 
        type: 'positive'
      },
      { 
        title: 'Ethereum Blockchain Security Concerns', 
        source: 'TechCrunch', 
        content: 'There are growing concerns over the security of Ethereum’s blockchain.', 
        link: 'https://www.techcrunch.com', 
        date: '2025-03-08', 
        impact: 60, 
        type: 'negative'
      },
      { 
        title: 'Ethereum Staking Mechanism Gets Major Update', 
        source: 'CoinMarketCap', 
        content: 'The Ethereum staking mechanism has undergone a major update to improve rewards.', 
        link: 'https://www.coinmarketcap.com', 
        date: '2025-03-07', 
        impact: 55, 
        type: 'positive'
      },
      { 
        title: 'Ethereum’s Transition to PoS', 
        source: 'Blockchain News', 
        content: 'Ethereum is officially transitioning to proof of stake with the upcoming merge.', 
        link: 'https://www.blockchainnews.com', 
        date: '2025-03-06', 
        impact: 50, 
        type: 'positive'
      },
      { 
        title: 'Ethereum DAO to Fund New Projects', 
        source: 'CoinTelegraph', 
        content: 'The Ethereum DAO is set to fund several new blockchain projects.', 
        link: 'https://www.cointelegraph.com', 
        date: '2025-03-05', 
        impact: 45, 
        type: 'positive'
      },
      { 
        title: 'Ethereum Smart Contracts Under Scrutiny', 
        source: 'CryptoSlate', 
        content: 'Ethereum smart contracts are under increasing scrutiny due to several high-profile hacks.', 
        link: 'https://www.cryptoslate.com', 
        date: '2025-03-04', 
        impact: 60, 
        type: 'negative'
      },
    ],
    // اضافه کردن اخبار برای سایر ارزها مشابه به بالا
  },
  selectedCoin: 'BTC',
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
  setFakePrice: (coin, priceData) =>
    set((state) => ({
      fakePrices: { ...state.fakePrices, [coin]: priceData },
    })),
  setFakeNews: (coin, newsData) =>
    set((state) => ({
      fakeNews: { ...state.fakeNews, [coin]: newsData },
    })),
}));
