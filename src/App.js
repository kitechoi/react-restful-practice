import React from 'react';
import ArticleList from './components/ArticleList';
import AddArticle from './components/AddArticle';

function App() {
    return (
        <div>
            <h1>Blog App</h1>
            <ArticleList />
            <AddArticle />
            
        </div>
    );
}

export default App;
