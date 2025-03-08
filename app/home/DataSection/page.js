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
        threshold: 0.5,
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
    // رندر کردن سلول‌ها (همان تابع قبلی)
    const renderCell = (item, columnKey) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "name":
                return <Avatar src={item.icon} className="font-bold text-md bg-transparent" name={cellValue} />;
            case "lastPrice":
                return <p className="font-bold text-md">{cellValue} $</p>;
            case "Change24":
                return (
                    <Chip className="font-bold" color={cellValue > 0 ? "success" : "danger"} variant="light">
                        {cellValue}%
                    </Chip>
                );
            default:
                return cellValue;
        }
    };
    const phoneVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const tableVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.5 } }
    };

    return (
        <div
            ref={ref}
            className={`relative flex justify-center items-center min-h-screen ${
                isDark ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-white to-teal-50"
            }`}
        >
            <motion.div 
                className="z-0"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={phoneVariants}
            >
                <Image src="./Svgs/phoneSVG.png" alt="Phone Frame" className="w-[440px]" />
            </motion.div>

            <motion.div 
                className="absolute z-10 bg-transparent"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={tableVariants}
            >
                <Table
                    aria-label="Your Table Description Here"
                    className="overflow-y-hidden bg-transparent shadow-inner rounded-b-[120px] text-gray-800 dark:text-white mx-auto w-[270px] h-[630px] z-0"
                >
                    <TableHeader>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Last Price</TableColumn>
                        <TableColumn>24h Change</TableColumn>
                    </TableHeader>
                    <TableBody items={data}>
                        {(item) => (
                            <TableRow key={item.id} className="text-sm">
                                {["name", "lastPrice", "Change24"].map((columnKey) => (
                                    <TableCell className="text-sm" key={columnKey}>{renderCell(item, columnKey)}</TableCell>
                                ))}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </motion.div>
        </div>
    );
}
