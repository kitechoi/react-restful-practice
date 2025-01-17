import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Axios 설정 파일을 불러옵니다.

function TestApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // API 호출
    useEffect(() => {
        api.get('/articles') // 예: '/api/articles'에 GET 요청
            .then((response) => {
                setData(response.data); // 성공하면 데이터 저장
                setError(null); // 에러 상태 초기화
            })
            .catch((err) => {
                setError(err.message); // 에러 메시지 저장
                setData(null); // 데이터 상태 초기화
            });
    }, []); // 컴포넌트가 처음 렌더링될 때 호출

    // 결과 렌더링
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>; // 데이터 로드 중
    }

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {data.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestApi;
