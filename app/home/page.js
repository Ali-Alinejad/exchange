// app/home/page.js
"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Bitcoin Price',
            data: [30000, 35000, 32000, 40000, 45000, 38000, 50000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
        },
    ],
};

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
            <header className="flex justify-between items-center p-5 shadow-md">
                <h1 className="text-3xl font-bold">My Exchange</h1>
                <Button onClick={toggleDarkMode} className="transition duration-300">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </header>

            <main className="container mx-auto p-5">
                {/* Hero Section */}
                <section className="hero bg-blue-500 text-white rounded-lg p-10 mb-10">
                    <h2 className="text-4xl font-semibold">Welcome to My Exchange</h2>
                    <p className="mt-4 text-lg">
                        Trade various cryptocurrencies with ease. Secure and user-friendly platform!
                    </p>
                    <Button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                        Get Started
                    </Button>
                </section>

                {/* Chart Section */}
                <section className="my-10">
                    <h2 className="text-2xl font-semibold mb-4">Bitcoin Price Chart</h2>
                    <div className="bg-gray-100 rounded-lg p-5 shadow-md">
                        <Line data={data} />
                    </div>
                </section>

                {/* Featured Cryptocurrencies */}
                <section className="my-10">
                    <h2 className="text-2xl font-semibold mb-4">Featured Cryptocurrencies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano'].map((coin) => (
                            <div
                                key={coin}
                                className="bg-gray-200 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <h3 className="text-xl font-bold">{coin}</h3>
                                <p className="mt-2">Current Price: {/* اینجا میتونی قیمت رو دینامیک کنی */}</p>
                                <Button className="mt-4 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition">
                                    Trade
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Latest News */}
                <section className="my-10">
                    <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                    <div className="space-y-4">
                        {['Crypto Market Hits All-Time High', 'New Regulations for Digital Currency', 'Bitcoin Dominance Declines'].map((news) => (
                            <div key={news} className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="font-bold">{news}</h3>
                                <p className="mt-2">Brief description of the news article.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white text-center p-4">
                <p>© 2025 My Exchange. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> | 
                    <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
}
