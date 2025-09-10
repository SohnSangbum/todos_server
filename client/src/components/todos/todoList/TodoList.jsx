import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.scss';
import { useEffect } from 'react';
import { getTodos } from '../../../store/modules/getAsync';

const TodoList = () => {
    const { todos } = useSelector((state) => state.todosR);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    return (
        <ul className="TodoList">
            {todos.length > 0 && todos.map((item) => <TodoItem key={item._id} {...item} />)}
        </ul>
    );
};

export default TodoList;
