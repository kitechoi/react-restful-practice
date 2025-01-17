import React, { useState, useEffect } from 'react';
import api from '../services/api';

function EditArticle({ articleId, onUpdate }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 기존 데이터 가져오기
    useEffect(() => {
        api.get(`/articles/${articleId}`)
            .then(response => {
                setTitle(response.data.title);
                setContent(response.data.content);
            })
            .catch(error => console.error("Error fetching article:", error));
    }, [articleId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`/articles/${articleId}`, { title, content })
            .then(() => {
                alert('Article updated successfully!');
                onUpdate(); // 부모 컴포넌트에서 데이터 갱신
            })
            .catch(error => console.error("Error updating article:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Article</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
}

export default EditArticle;
