import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        api.get('/articles')
            .then((response) => setArticles(response.data))
            .catch((error) => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <hr/>
            <h2>Article List</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        {/* 제목 클릭 시 상세 페이지로 이동 */}
                        <Link to={`/articles/${article.id}`}>
                            <h2>{article.title}</h2>
                        </Link>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;
