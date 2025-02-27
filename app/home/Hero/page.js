"use client"


import { Image, Button, Card, Badge } from "@heroui/react";
import { ArrowRightIcon, ChartBarIcon, GlobeAltIcon, CurrencyDollarIcon, UserGroupIcon } from "@heroicons/react/24/outline";


const stats = [
  { value: "200+", label: "Countries Covered", icon: GlobeAltIcon },
  { value: "39 Million+", label: "Global Investors", icon: UserGroupIcon },
  { value: "900+", label: "Coins", icon: CurrencyDollarIcon },
  { value: "$2.03 Billion", label: "24h Trading Volume", icon: ChartBarIcon },
];

function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white h-[96vh]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
     
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <Image src="Logos/logo-text-vertical.png" alt="Logo" 
             width={300}
             height={200}
              />
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Trade Cryptocurrency <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">with Ease</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join Mojex and get <span className="text-teal-400 font-semibold">20% off</span> on your first transaction!
            </p>
            <p className="text-gray-400 mb-10">
              Mojex is your go-to platform for efficient cryptocurrency trading. Our user-friendly interface and comprehensive tools help you navigate the crypto market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button color="teal" size="lg" href="/market">
                Go to Market
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button color="white" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative mt-52">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full filter blur-3xl opacity-20"></div>
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
            <Card key={index} className="bg-gray-800 border-gray-700 text-white">
              <div className="flex items-center">
                <stat.icon className="h-12 w-12 text-teal-400 mr-4" />
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
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
