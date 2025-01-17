import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function ArticleDetailPage() {
    const { id } = useParams(); // URL에서 글 ID를 가져옵니다
    const navigate = useNavigate();
    const [article, setArticle] = useState({ title: '', content: '' });

    useEffect(() => {
        // 글 데이터를 가져옵니다
        api.get(`/articles/${id}`)
            .then((response) => setArticle(response.data))
            .catch((error) => console.error('Error fetching article:', error));
    }, [id]);

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <button onClick={() => navigate(`/articles/${id}/edit`)}>
                Edit
            </button>
        </div>
    );
}

export default ArticleDetailPage;
