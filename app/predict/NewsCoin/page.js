// /components/Predict/NewsCoin/NewsCard.js
export default function NewsCard({ news }) {
    return (
      <div className="bg-blue-100 h-full dark:bg-gray-900  p-8  rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold ">NEWS</h3>
        <ul className="">
          {news.map((item, index) => (
              <a href={item.link} target="_blank" className="text-blue-300 mt-2 block">
            <li key={index} className="border-b py-4 cursor-pointer hover:scale-95 transition-all duration-300 hover:text-gray-400">
              <span className="font-bold">{item.title}</span><span className="text-xs text-amber-500 ml-4">{item.source}</span> <br />
    
              <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
            </li>
              </a>
          ))}
        </ul>
      </div>
    );
  }
  