// 서버 기본 세팅
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 미들웨어 설정
app.use(express.json()); // JSON 요청 파싱
app.use(cors()); // CORS 허용

// 환경 변수에서 포트 가져오기 (기본값: 3000)
const PORT = process.env.PORT || 3000;

// DB 연결
const dbConnect = require('./src/models');
dbConnect();

// 라우터 불러오기
const todoRouter = require('./src/router/todos.router');

// 기본 라우트
app.get('/', (req, res) => {
    res.send('일정관리 앱 만들기 서버입니다 ');
});

// 공통 경로에 라우터 연결
app.use('/todos', todoRouter);

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});
