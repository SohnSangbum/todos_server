const mongoose = require('mongoose');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vmgyiwe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
// 경로/${DB_NAME}?retryWrites=true&w=majority

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(DB_URL);
        console.log('MongoDB 연결 성공');
    } catch (err) {
        console.error('MongoDB 연결 실패:', err);
    }
};

module.exports = dbConnect;
