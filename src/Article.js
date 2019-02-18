import React from "react";

const Article = props => {
  const { article } = props;

  return (
    <div id={article.id}>
      <h4>{article.text}</h4>
    </div>
  );
};

export default Article;
