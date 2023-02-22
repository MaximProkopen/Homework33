import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import styles from "./Articles.module.scss";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllArticles = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setArticles(data))
    }
    getAllArticles();
  }, [])

  return (
    <div>
      <h1>Articles page</h1>
      {articles.map((article) => (
        <div className={styles.Article} key={article.id}>
          <Link to={`${article.id}`}>
          {article.title}
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default Articles
