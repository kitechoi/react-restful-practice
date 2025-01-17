import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // 백엔드 API의 기본 URL
});

export default api; // default export
