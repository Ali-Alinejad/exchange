// /store.js
import { create } from 'zustand';


export const useStore = create((set) => ({
  fakePrices: {
    BTC: { name: 'Bitcoin', price: 42.000, week: 41.500, month: 40.800, year: '$38,200' },
    ETH: { name: 'Ethereum', price: '$3,200', week: '$3,100', month: '$3,050', year: '$2,800' },
    USDT: { name: 'Tether', price: '$1.00', week: '$1.00', month: '$1.00', year: '$1.00' },
  },
  fakeNews: {
    BTC: [
      { title: 'Bitcoin Hits New High', source: 'CoinDesk', content: 'Bitcoin has hit a new all-time high.', link: 'https://www.coindesk.com', impact: 90 },
      { title: 'Bitcoin Adoption Growing', source: 'CryptoNews', content: 'Bitcoin adoption continues to grow.', link: 'https://www.cryptonews.com', impact: 70 },
    ],
    ETH: [
      { title: 'Ethereum 2.0 Update Released', source: 'CryptoNews', content: 'Ethereum 2.0 is now live.', link: 'https://www.cryptonews.com', impact: 85 },
      { title: 'Ethereum Price Surge', source: 'CoinTelegraph', content: 'Ethereum has seen a massive price surge.', link: 'https://www.cointelegraph.com', impact: 75 },
    ],
    USDT: [
      { title: 'Tether\'s Growth Continues', source: 'Bloomberg', content: 'Tether\'s market cap continues to grow.', link: 'https://www.bloomberg.com', impact: 60 },
      { title: 'USDT Pegged at $1', source: 'CoinMarketCap', content: 'USDT remains pegged at $1.', link: 'https://www.coinmarketcap.com', impact: 50 },
    ],
  },
  selectedCoin: 'BTC',
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
}));
