const express = require('express');
const { getTodos, delTodos, postTodos, putTodos } = require('../controllers/todos.controller');

const router = express.Router();

// -> /todos 는 공통 경로
router.get('/', getTodos);
router.delete('/:id', delTodos);
router.post('/', postTodos);
router.put('/:id', putTodos);
module.exports = router;
