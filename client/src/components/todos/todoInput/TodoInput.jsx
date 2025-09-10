import { useDispatch, useSelector } from 'react-redux';
import './TodoInput.scss';
import { useState } from 'react';
import { getTodos, postTodos } from '../../../store/modules/getAsync';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        dispatch(postTodos(text))
            .unwrap()
            .then(() => {
                setText('');
                dispatch(getTodos());
            })
            .catch((error) => {
                console.error('Todo 추가 실패:', error);
            });
    };

    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input
                type="text"
                name="text"
                value={text}
                placeholder="일정을 입력하세요"
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
