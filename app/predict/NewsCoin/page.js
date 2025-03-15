import { Card, CardBody, CardHeader, Chip } from "@heroui/react";

export default function NewsCard({ news }) {
  return (
    <div className="bg-blue-100 h-full dark:bg-gray-900 p-8 rounded-lg shadow-xl overflow-y-scroll">
      <h3 className="text-2xl font-bold mb-4">NEWS</h3>
      <div className="space-y-4">
        {news.map((item, index) => (
          <Card key={index} className=" hover:scale-105 bg-gray-800/80 shadow-2xl transition-all duration-300">
            <CardHeader className="flex justify-around ">
              <p className="text-lg font-bold">{item.title}</p>
                <p className="text-gray-500 mt-2 text-sm w-28 ml-auto">{item.date}</p>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 dark:text-gray-300">{item.content}</p>

              <div className="mt-2 text-xs flex justify-evenly">
                <Chip variant="bordered" className="text-xs text-sky-600 ml-4">{item.source}</Chip>
                <Chip
                variant="bordered"
                
                  className={`ml-4 text-xs font-semibold ${
                    item.type === "positive" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.type === "positive" ? "Positive" : "Negative"}
                </Chip>
                <Chip
                variant="bordered"

                  className={`ml-4 text-xs font-semibold ${
                    item.impact >= 80
                      ? "text-green-500"
                      : item.impact >= 50
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  (Impact: {item.impact}%)
                </Chip>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
