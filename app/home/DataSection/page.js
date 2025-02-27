"use client";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Button,
    Avatar,
} from "@heroui/react";
import React, { useState } from "react";
import Chart from "react-apexcharts";
export const columns = [
    { name: "Name", uid: "name" },
    { name: "Last Price", uid: "lastPrice" },
    { name: "24h Change", uid: "Change24" },
    { name: "Chart", uid: "chart" },
    { name: "24h Volume", uid: "volume24h" },
    { name: "Action", uid: "Action" },
];

export const data = [
    {
        id: 1,
        name: "BTC",
        lastPrice: '88.934',
        Change24: '-0.05',
        icon: 'coins/icons8-bitcoin-240.png',
        Chart: {
            last12h: {
                ago1h: 82120,
                ago2h: 83120,
                ago3h: 85120,
                ago4h: 85820,
                ago5h: 84320,
                ago6h: 86120,
                ago7h: 86220,
                ago8h: 88120,
                ago9h: 89120,
                ago10h: 90120,
                ago11h: 91120,
                ago12h: 90120,
            }
        },
        marketCap: 1.7,
        volume24h: 79.9
    },
    {
        id: 2,
        name: "ETH",
        icon: 'coins/icons8-ethereum-240.png',

        lastPrice: '2.670',
        Change24: '+1.25',
        Chart: {
            last12h: {
                ago1h: 2650,
                ago2h: 2660,
                ago3h: 2665,
                ago4h: 2668,
                ago5h: 2672,
                ago6h: 2675,
                ago7h: 2674,
                ago8h: 2670,
                ago9h: 2665,
                ago10h: 2662,
                ago11h: 2660,
                ago12h: 2655,
            }
        },
        marketCap: 0.3,
        volume24h: 20.5
    },
    {
        id: 3,
        name: "LTC",
        lastPrice: '150',
        icon: 'coins/icons8-litecoin-250.png',

        Change24: '+0.85',
        Chart: {
            last12h: {
                ago1h: 149,
                ago2h: 138,
                ago3h: 151,
                ago4h: 152,
                ago5h: 150,
                ago6h: 149,
                ago7h: 150,
                ago8h: 151,
                ago9h: 150,
                ago10h: 149,
                ago11h: 150,
                ago12h: 148,
            }
        },
        marketCap: 0.01,
        volume24h: 5.2
    },
    {
        id: 4,
        name: "XRP",
        icon: 'coins/icons8-xrp-240.png',

        lastPrice: '0.75',
        Change24: '+0.20',
        Chart: {
            last12h: {
                ago1h: 0.74,
                ago2h: 0.73,
                ago3h: 0.75,
                ago4h: 0.76,
                ago5h: 0.77,
                ago6h: 0.76,
                ago7h: 0.68,
                ago8h: 0.754,
                ago9h: 0.73,
                ago10h: 0.72,
                ago11h: 0.74,
                ago12h: 0.73,
            }
        },
        marketCap: 0.04,
        volume24h: 1.5
    },
    {
        id: 5,
        name: "ADA",
        icon: 'coins/icons8-exchange-96.png',

        lastPrice: '1.10',
        Change24: '-0.15',
        Chart: {
            last12h: {
                ago1h: 1.09,
                ago2h: 1.08,
                ago3h: 1.11,
                ago4h: 1.10,
                ago5h: 1.12,
                ago6h: 1.11,
                ago7h: 1.10,
                ago8h: 1.09,
                ago9h: 1.08,
                ago10h: 1.07,
                ago11h: 1.09,
                ago12h: 1.08,
            }
        },
        marketCap: 0.03,
        volume24h: 3.2
    },
];


const getChartData = (chartData) => {
    const labels = Object.keys(chartData.last12h).map(key => key.replace('ago', ''));
    const values = Object.values(chartData.last12h);

    return {
        series: [{
            name: 'Price',
            data: values,
        }],
        options: {
            chart: {
                type: 'area',
                height: 60,
                width:100,
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2, 
                colors: ['#018c81'],
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: '',
                    type: 'vertical',
                    shadeIntensity: 10,
                    inverseColors: false,
                    stops: [0, 100],
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#018c81',
                    },
                    offsetX: 0,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            xaxis: {
                categories: labels,
                labels: {
                    show: true,
                },
            },
            tooltip: {
                enabled: true,
                shared: true,
            },
            legend: {
                show: false,
            },
            grid: {
                borderColor: '#018c81',
                row: {
                    colors: ['transparent'], 
                },
            },
        },
    };
};





export default function DataSection() {
    const renderCell = React.useCallback((item, columnKey) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <Avatar src={item.icon} className="font-bold text-xl bg-transparent" name={cellValue}  > {item.name}</Avatar>
                );
            case "lastPrice":
                return <p className="font-bold text-lg">{cellValue} $</p>;
            case "Change24":
                return (
                    <Chip className=" font-bold text-large" color={cellValue > 0 ? 'success' : 'danger'} variant="light">
                    {cellValue}%
                </Chip>
                
                );
                case "volume24h":
                    return (
                        <p className=" font-bold text-large"  >
                        {cellValue} B
                    </p>
                    
                    );
            case "chart":
                const chartData = getChartData(item.Chart);
                return (
                    <div style={{ width: '100px', height: '60px' }}>
                        <Chart options={chartData.options} series={chartData.series} type="line" height={60}  />
                    </div>
                );
                case "Action":
                    return (
                        <p className=" font-bold text-large"  >
                        <Button className="border-teal-700 text-teal-600 border-[1px] font-bold hover:scale-95" variant="faded">Show</Button>
                    </p>
                    
                    );
                
            default:
                return cellValue;
        }
    }, []);

    return (
            <Table aria-label="" style={{ fontSize: '0.9rem' }} className="w-fit mx-auto my-28">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "Action" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={data}>
                {(item) => (
                    <TableRow key={item.id} className=" mx-4 odd:bg-gray-50 text-lg ">
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
