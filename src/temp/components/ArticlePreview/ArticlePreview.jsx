import React from "react";
import classes from "./ArticlePreview.less";

const articlePreview = (props) => {
  const articleUrl = "/articles/" + props.article.slug;
  const authorUrl = "/authors/" + props.article.author.slug;

  const tagList = props.article.tags.map((tag, idx) => {
    const tagUrl = "/articles?tag=" + tag.slug;

    return (
      <span key={ idx }>
        <a href={ tagUrl }>{ tag.name }</a>
      </span>
    );
  });

  const previewImage = (
    <a href={ articleUrl } key="1">
      <img href={ props.article.image } />
    </a>
  );

  const previewText = (
    <div key="2">
      <a href={ articleUrl }>
        <h2>{ props.article.title }</h2>
      </a>
      <span>
        By <a href={ authorUrl }>{ props.article.author.name }</a>
      </span>
      <p>{ props.article.lede } </p>
      <div>
        { tagList }
      </div>
    </div>
  );

  const items = props.orientation === "left" ? [previewText, previewImage] : [previewImage, previewText];

  return (
    <div className={ classes.ArticlePreview }>
      { items }
    </div>
  );
};

export default articlePreview;