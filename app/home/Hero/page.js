"use client"

import { useTheme } from 'next-themes';
import { Image, Button, Card } from "@heroui/react";
import { ArrowRightIcon, ChartBarIcon, GlobeAltIcon, CurrencyDollarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const stats = [
  { value: "200+", label: "Countries Covered", icon: GlobeAltIcon },
  { value: "39 Million+", label: "Global Investors", icon: UserGroupIcon },
  { value: "900+", label: "Coins", icon: CurrencyDollarIcon },
  { value: "$2.03 Billion", label: "24h Trading Volume", icon: ChartBarIcon },
];

function Hero() {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-white'} text-${isDark ? 'white' : 'gray-800'} h-[96vh]`}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <Image src="Logos/logo-text-vertical.png" alt="Logo" 
             width={260}
             height={200}
            />
            <h1 className="text-5xl font-extrabold mb-6 leading-tight text-gray-400">
              Trade Cryptocurrency <br />
              <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-gradient-to-r from-teal-600 to-blue-700'}`}>with Ease</span>
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Join Mojex and get <span className={`${isDark ? 'text-teal-400' : 'text-teal-600'} font-semibold`}>20% off</span> on your first transaction!
            </p>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-10`}>
              Mojex is your go-to platform for efficient cryptocurrency trading. Our user-friendly interface and comprehensive tools help you navigate the crypto market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button color="teal" size="lg" href="/market">
                Go to Market
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button color={isDark ? "white" : "gray"} variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative mt-52">
            <div className={`absolute inset-0 bg-gradient-to-tr ${isDark ? 'from-teal-400 to-blue-500' : 'from-teal-600 to-blue-700'} rounded-full filter blur-3xl opacity-20`}></div>
            <Image
              alt="Hero Image"
              src="hero/hero.png"
              className="relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} text-${isDark ? 'gray-400' : 'gray-800'}`}>
              <div className="flex items-center">
                <stat.icon className={`h-12 w-12 ${isDark ? 'text-teal-400' : 'text-teal-600'} mr-4`} />
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
