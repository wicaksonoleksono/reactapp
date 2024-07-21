import React, { useState, useEffect } from "react";
import FetchData from "../../components/fetch";
import CardComponent from "../../components/cardComponent";
import LogoutButton from "../../components/handleLogout";

interface Source {
  id: string;
  name: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ResponseData {
  status: string;
  totalResults: number;
  articles: Article[];
}
const API_ENDPOINTS: { [key: string]: string } = {
  TESLA:
    "https://newsapi.org/v2/everything?q=tesla&from=2024-04-02&sortBy=publishedAt&apiKey=362de69bbf9e42f7b9e41b6563dee0a2",
  TECH:
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=362de69bbf9e42f7b9e41b6563dee0a2",
  POPULAR:
    "https://newsapi.org/v2/everything?q=apple&from=2024-05-01&to=2024-05-01&sortBy=popularity&apiKey=362de69bbf9e42f7b9e41b6563dee0a2",
  VARIOUS:
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=362de69bbf9e42f7b9e41b6563dee0a2",
};

const Dashboard = () => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>("TECH");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ResponseData = await FetchData(API_ENDPOINTS[category]);
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    newsData.forEach((article, index) => {
      console.log(`Article ${index + 1}:`, article);
    });
  }, [newsData]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };
  return (
    <div>
      <div className="flex justify-end space-x-2 mr-16">
        <LogoutButton />
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleCategoryChange("TESLA")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Tesla
        </button>
        <button
          onClick={() => handleCategoryChange("TECH")}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline"
        >
          Tech
        </button>
        <button
          onClick={() => handleCategoryChange("POPULAR")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Popular
        </button>
        <button
          onClick={() => handleCategoryChange("VARIOUS")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline"
        >
          Various
        </button>
      </div>
      <div
        className={`h-screen w-screen grid grid-cols-3 md:grid-cols-${Math.min(
          2,
          newsData.length
        )} lg:grid-cols-${Math.min(3, newsData.length)} gap-4`}
      >
        {newsData.map((article, index) => (
          <div key={index} className="p-2">
            <CardComponent
              key={article.title}
              keyProp={article.title}
              id={article.source.id}
              author={article.author}
              title={article.title}
              description={article.description}
              urlToImage={article.urlToImage}
              url={article.url}
              publishedAt={article.publishedAt}
              content={article.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
