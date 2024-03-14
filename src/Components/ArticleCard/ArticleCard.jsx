import React from 'react';
import { Link } from "react-router-dom";
import './ArticleCard.css';

function ArticleCard ({topic, articles}) {
    return (
        <div>
            <h1 className="article-title">{topic} articles</h1>
            <ul className="article-card-list">
                {articles.map(({article_id, title, article_img_url}) => {
                    return (  
                        <li key={article_id} className="article-card-item">
                            <Link to={`/articles/${article_id}`} className="article-card-link">
                                <div className="article-card">
                                    <img src={article_img_url} alt={title} className="article-card-image" />
                                    <div className="article-card-details">
                                        <h2 className="article-card-title">{title}</h2>
                                    </div>
                                </div>
                            </Link> 
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ArticleCard;
