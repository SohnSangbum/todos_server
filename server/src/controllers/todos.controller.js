// Todo 모델 불러오기
const Todo = require('../models/todos.model');

// 전체 Todo 조회 (READ)
const getTodos = async (req, res) => {
    try {
        // createdAt 기준으로 내림차순 정렬하여 가져오기
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json(todos); // 성공 시 200 응답과 todos 데이터 반환
    } catch (error) {
        // 에러 처리
        res.status(500).json({ message: 'Error fetching todos', error: error.message });
    }
};

// 특정 Todo 삭제 (DELETE)
const delTodos = async (req, res) => {
    const num = req.params.id; // URL 파라미터에서 id 값 가져오기
    try {
        // 해당 ID로 Todo 삭제
        const deletedTodo = await Todo.findByIdAndDelete(num);

        if (!deletedTodo) {
            // 삭제할 Todo가 없을 경우
            return res.status(404).json({ message: 'Todo not found' });
        }
        // 성공적으로 삭제됨
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error: error.message });
    }
};

// 새로운 Todo 추가 (CREATE)
const postTodos = async (req, res) => {
    try {
        const { text, isChk } = req.body; // 요청 body에서 데이터 추출

        // text 필드가 없으면 에러 반환
        if (!text) {
            return res.status(400).json({ message: 'Text field is required' });
        }

        // 새 Todo 객체 생성
        const newTodo = new Todo({
            text,
            isChk: isChk || false, // 값이 없으면 false 기본값
        });

        // DB에 저장
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo); // 성공 시 201 Created와 저장된 데이터 반환
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo', error: error.message });
    }
};

// Todo 수정 (UPDATE)
const putTodos = async (req, res) => {
    try {
        const { text, isChk } = req.body;

        // 해당 ID의 Todo 수정 (new: true → 수정된 문서 반환)
        // runValidators: true → 스키마 유효성 검사 적용
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { text, isChk },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            // 수정할 Todo가 없을 경우
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo); // 수정된 데이터 반환
    } catch (error) {
        res.status(500).json({ message: 'Error updating todo', error: error.message });
    }
};

// 컨트롤러 함수들을 모듈로 내보내기
module.exports = { getTodos, delTodos, postTodos, putTodos };
