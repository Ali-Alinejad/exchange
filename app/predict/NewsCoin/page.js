// /components/Predict/NewsCoin/NewsCard.js
export default function NewsCard({ news }) {
    return (
      <div className="p-8 bg-white dark:bg-gray-900 shadow-xl hover:bg-blue-100 transition duration-300">
        <h3 className="text-2xl font-bold">اخبار مرتبط</h3>
        <ul>
          {news.map((item, index) => (
            <li key={index} className="border-b py-6">
              <span className="font-bold">{item.title}</span> <br />
              <span className="text-sm text-gray-500">{item.source}</span> <br />
              <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
              <a href={item.link} target="_blank" className="text-blue-500 mt-2 block">
                بیشتر بخوانید
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  