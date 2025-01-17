import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import AddArticle from './components/AddArticle';
import ArticleDetailPage from './components/ArticleDetailPage';
import EditArticlePage from './components/EditArticlePage';

function App() {
    return (
        <Router>
            <div>
                <h1>Blog App</h1>
                <hr />
                <Routes>
                    {/* 메인 페이지: 글 목록 및 글 작성 */}
                    <Route
                        path="/"
                        element={
                            <>
                                <ArticleList />
                                <AddArticle />
                            </>
                        }
                    />
                    {/* 글 상세 조회 페이지 */}
                    <Route path="/articles/:id" element={<ArticleDetailPage />} />
                    {/* 글 수정 페이지 */}
                    <Route path="/articles/:id/edit" element={<EditArticlePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
