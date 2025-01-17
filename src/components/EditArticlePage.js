import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function EditArticlePage() {
    const { id } = useParams();  // URL에서 글 ID를 추출
    const navigate = useNavigate();
    const [article, setArticle] = useState({ title: '', content: '' });

    // 글 데이터를 API로 가져오기
    useEffect(() => {
        api.get(`/articles/${id}`)
            .then(response => setArticle(response.data))
            .catch(error => console.error("Error fetching article:", error));
    }, [id]);

    // 수정된 데이터를 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`/articles/${id}`, article)
            .then(() => {
                alert('Article updated successfully!');
                navigate('/'); // 수정 후 목록 페이지로 이동
            })
            .catch(error => console.error("Error updating article:", error));
    };

    // 수정 폼 렌더링
    return (
        <div>
            <h2>Edit Article</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={article.title}
                    onChange={(e) => setArticle({ ...article, title: e.target.value })}
                    placeholder="Title"
                />
                <textarea
                    value={article.content}
                    onChange={(e) => setArticle({ ...article, content: e.target.value })}
                    placeholder="Content"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditArticlePage;
