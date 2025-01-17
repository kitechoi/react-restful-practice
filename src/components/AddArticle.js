import React, { useState } from 'react';
import api from '../services/api';

function AddArticle() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/articles', { title, content })
            .then(() => {
                alert('Article added successfully!');
                setTitle('');
                setContent('');
            })
            .catch((error) => console.error('Error adding article:', error));
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <hr />
            <h2>Add Article (글 작성)</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add Article</button>
            <p></p>
        </form>
        
    );
}

export default AddArticle;
