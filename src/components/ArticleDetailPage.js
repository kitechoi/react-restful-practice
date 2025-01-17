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

    // 글 삭제 함수
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            api.delete(`/articles/${id}`)
                .then(() => {
                    alert('Article deleted successfully!');
                    navigate('/'); // 삭제 후 글 목록 페이지로 이동
                })
                .catch((error) => console.error('Error deleting article:', error));
        }
    };

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <button onClick={() => navigate(`/articles/${id}/edit`)}>
                Edit
            </button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ArticleDetailPage;
