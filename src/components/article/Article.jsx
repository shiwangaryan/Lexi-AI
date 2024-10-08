import React from "react";
import "./article.css";

const Article = ({ imageUrl, date, title, size, height }) => {
  const titleStyle = {
    fontSize: size,
    lineHeight: height,
  };

  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imageUrl}/>
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3 style={titleStyle}>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
