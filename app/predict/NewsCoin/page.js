import { useState } from "react";
import { Card, CardBody, CardHeader, Chip, Select, SelectItem } from "@heroui/react";

export default function NewsCard({ news }) {
  const [sortType, setSortType] = useState("date"); 

  const sortedNews = [...news].sort((a, b) => {
    if (sortType === "impact") {
      return b.impact - a.impact; 
    } else if (sortType === "date") {
      return new Date(b.date) - new Date(a.date); 
    }
    return 0;
  });

  return (
    <div className="bg-gray-50 h-full dark:bg-gray-900 p-8 rounded-lg shadow-sm overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">NEWS</h3>
        
        <Select
          label="Sort By"
          variant="bordered"
          className="w-40  dark:border-gray-700"
          selectedKeys={[sortType]}
          onSelectionChange={(keys) => setSortType(keys.currentKey)}
        >
          <SelectItem key="date">Latest Date</SelectItem>
          <SelectItem key="impact">Highest Impact</SelectItem>
        </Select>
      </div>

      <div className="space-y-4">
        {sortedNews.map((item, index) => (
          <Card key={index} className="hover:scale-105 dark:bg-gray-800/80 shadow-lg transition-all duration-300 ">
            <CardHeader className="flex justify-between">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-gray-500 mt-2 text-sm">{item.date}</p>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 dark:text-gray-300">{item.content}</p>

              <div className="mt-2 text-xs flex justify-evenly">
                <Chip variant="bordered" className="text-xs text-sky-400">{item.source}</Chip>
                <Chip
                  variant="bordered"
                  className={`text-xs font-semibold ${
                    item.type === "positive" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.type === "positive" ? "Positive" : "Negative"}
                </Chip>
                <Chip
                  variant="bordered"
                  className={`text-xs font-semibold ${
                    item.impact >= 80
                      ? "text-rose-400"
                      : item.impact >= 50
                      ? "text-yellow-400"
                      : "text-green-500"
                  }`}
                >
                  Impact: {item.impact}%
                </Chip>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
