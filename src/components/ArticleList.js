import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log('Fetching articles...');
        api.get('/articles')
            .then((response) => {
                console.log('Fetched articles:', response.data);
                setArticles(response.data);
            })
            .catch((error) => console.error('Error fetching articles:', error));
    }, []);
    

    return (
        
        <div>
            <hr />

            <h1>Article List</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;
