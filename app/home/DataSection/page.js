import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Avatar,
    Chip,
    Image,
} from "@heroui/react";
import { useTheme } from "next-themes";

export default function DataSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const data = [
        {
            id: 1,
            name: "BTC",
            lastPrice: "88.934",
            Change24: "-0.05",
            icon: "coins/icons8-bitcoin-240.png",
        },
        {
            id: 2,
            name: "ETH",
            lastPrice: "2.670",
            Change24: "+1.25",
            icon: "coins/icons8-ethereum-240.png",
        },
        {
            id: 3,
            name: "BTC",
            lastPrice: "88.934",
            Change24: "-0.05",
            icon: "coins/icons8-bitcoin-240.png",
        },
        {
            id: 4,
            name: "ETH",
            lastPrice: "2.670",
            Change24: "+1.25",
            icon: "coins/icons8-ethereum-240.png",
        },
        {
            id: 5,
            name: "BTC",
            lastPrice: "88.934",
            Change24: "-0.05",
            icon: "coins/icons8-bitcoin-240.png",
        },
        {
            id: 6,
            name: "ETH",
            lastPrice: "2.670",
            Change24: "+1.25",
            icon: "coins/icons8-ethereum-240.png",
        },
        {
            id: 7,
            name: "BTC",
            lastPrice: "88.934",
            Change24: "-0.05",
            icon: "coins/icons8-bitcoin-240.png",
        },
        {
            id: 8,
            name: "ETH",
            lastPrice: "2.670",
            Change24: "+1.25",
            icon: "coins/icons8-ethereum-240.png",
        },
        {
            id: 9,
            name: "BTC",
            lastPrice: "88.934",
            Change24: "-0.05",
            icon: "coins/icons8-bitcoin-240.png",
        }
    ];

    const renderCell = (item, columnKey) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <Avatar 
                        src={item.icon} 
                        className="font-bold text-md bg-transparent"
                        name={cellValue}
                        size="lg"
                    />
                );
            case "lastPrice":
                return (
                    <p className={`font-bold text-md ${
                        isDark ? "text-teal-400" : "text-teal-600"
                    }`}>
                        {cellValue} $
                    </p>
                );
            case "Change24":
                return (
                    <Chip 
                        className="font-bold "
                        color={cellValue > 0 ? "success" : "danger"} 
                        variant="shadow"
                    >
                        {cellValue}%
                    </Chip>
                );
            default:
                return cellValue;
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -100, filter: "blur(5px)" },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    const phoneVariants = {
        hidden: { opacity: 0, y: 100, x: 50, rotate: -5 },
        visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            rotate: 0,
            transition: { 
                duration: 0.8,
                delay: 0.4,
                ease: "backOut"
            } 
        }
    };

    const tableVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 50 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            transition: { 
                delay: 0.8, 
                duration: 0.6,
                ease: "circOut"
            } 
        }
    };

    const texts = [
        "Real-time Crypto Tracking",
        "Instant Market Updates",
        "24/7 Price Monitoring"
    ];

    return (
        <div
            ref={ref}
            className={`relative flex justify-between items-center min-h-screen px-40 ${
                isDark ? "bg-gradient-to-b from-gray-800 to-gray-900" : "bg-gradient-to-br from-teal-50 to-white"
            }`}
        >
            <motion.div 
                className="z-20 flex flex-col gap-8 w-[40%]"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {texts.map((text, i) => (
                    <motion.h2
                        key={i}
                        variants={textVariants}
                        custom={i}
                        className={`text-4xl font-extrabold bg-gradient-to-r ${
                            isDark 
                            ? "from-teal-400 to-blue-400" 
                            : "from-teal-600 to-blue-600"
                        } bg-clip-text text-transparent`}
                    >
                        {text}
                    </motion.h2>
                ))}
                
                <motion.p
                    className={`text-lg mt-6 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 1.2 }}
                >
                    Track cryptocurrency prices in real-time with our advanced monitoring system.
                </motion.p>
            </motion.div>

            {/* بخش سمت راست شامل گوشی و جدول */}
            <div className="relative w-[50%] flex justify-center">
                {/* قاب گوشی با افکت سه بعدی */}
                <motion.div 
                    className="z-10 relative"
                    variants={phoneVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <Image 
                        src="./Svgs/phoneSVG.png" 
                        alt="Phone Frame" 
                        className="w-[500px] drop-shadow-2xl"
                        
                    />
                </motion.div>

                <motion.div 
                    className="absolute top-10 right-[30.4%]"
                    variants={tableVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <Table
                        aria-label="Crypto Price Table"
                        className={`overflow-y-hidden  rounded-3xl mx-auto w-[320px]  backdrop-blur-lg ${
                            isDark 
                            ? "bg-gray-800/80 border border-gray-700" 
                            : "bg-white/90 border border-gray-200"
                        }`}
                    >
                        <TableHeader className={`${isDark ? "bg-gray-700/50" : "bg-teal-50"}`}>
                            {["Name", "Last Price", "24h Change"].map((header, i) => (
                                <TableColumn 
                                    key={i}
                                    className={`    ${
                                        isDark ? "text-teal-400" : "text-teal-600"
                                    }`}
                                >
                                    {header}
                                </TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody items={data}>
                            {(item) => (
                                <TableRow 
                                    key={item.id} 
                                    className={`group  ${
                                        isDark 
                                        ? "hover:bg-gray-700/30" 
                                        : "hover:bg-teal-50/50"
                                    } transition-colors`}
                                >
                                    {["name", "lastPrice", "Change24"].map((columnKey) => (
                                        <TableCell 
                                            className={`border-b py-[2%] ${
                                                isDark 
                                                ? "border-gray-700" 
                                                : "border-teal-100"
                                            }`} 
                                            key={columnKey}
                                        >
                                            {renderCell(item, columnKey)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </motion.div>
            </div>
        </div>
    );
}
