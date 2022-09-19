import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(process.env.REACT_APP_API_KEY);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      <div className="Navbar">
        <h1>All Sports Headlines</h1>
      </div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
