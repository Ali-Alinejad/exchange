
const stats = [
    { value: "200+", label: "Countries Covered" },
    { value: "39 Million+", label: "Global Investors" },
    { value: "900+", label: "Coins" },
    { value: "$2.03 Billion", label: "24h Trading Volume" },
];

function Hero() {
    return (
        <div>
            <div className="h-[100vh]">
                <div className="grid grid-cols-4 grid-rows-2 h-[94vh]">
                    <div className="col-span-4 h-[80vh] flex justify-center items-center">
                        <h1 className="text-6xl text-teal-600 font-bold">EXChange</h1>
                        <div className="flex flex-col">
                            <p className="text-gray-500">Crypto Trading Platform</p>
                            <p className="text-gray-500">
                                with <span className="text-teal-600">20%</span> Off
                            </p>
                        </div>
                    </div>

                    <div className="row-start-3 col-span-4 flex justify-center gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="shadow-lg rounded-md flex flex-col items-center justify-center h-[20vh] w-[400px] hover:-translate-y-2 cursor-pointer transition-transform duration-300 hover:shadow-xl"
                            >
                                <p className="text-2xl font-bold my-2">{stat.value}</p>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
