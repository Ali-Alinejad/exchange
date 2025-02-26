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
} from "@heroui/react";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale,PointElement);

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
        lastPrice: '88934',
        Change24: '-0.05',
        Chart: {
            last12h: {
                ago1h: 88120,
                ago2h: 88120,
                ago3h: 88120,
                ago4h: 88120,
                ago5h: 88120,
                ago6h: 88120,
                ago7h: 88120,
                ago8h: 88120,
                ago9h: 88120,
                ago10h: 88120,
                ago11h: 88120,
                ago12h: 88120,
            }
        },
        marketCap: 1.7,
        volume24h: 79.9
    },
    // سایر داده‌ها...
];

const getChartData = (chartData) => {
    const labels = Object.keys(chartData.last12h).map(key => key.replace('ago', ''));
    const values = Object.values(chartData.last12h);

    return {
        labels,
        datasets: [
            {
                label: 'Price',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                tension: 0.3, // Smooth curve
            },
        ],
    };
};

export default function DataSection() {
    const renderCell = React.useCallback((item, columnKey) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User avatarProps={{ radius: "lg", src: item.avatar }} name={cellValue} />
                );
            case "lastPrice":
                return <p className="text-bold text-sm">{cellValue}</p>;
            case "Change24":
                return (
                    <Chip className="capitalize" >
                        {cellValue}%
                    </Chip>
                );
            case "chart":
                return (
                    <div style={{ width: '150px', height: '80px' }}>
                        <Line data={getChartData(item.Chart)} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="لیست کاربران صرافی" style={{ fontSize: '0.9rem' }}>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "Action" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={data}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
