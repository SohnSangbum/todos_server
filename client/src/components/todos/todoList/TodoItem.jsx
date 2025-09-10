import { useDispatch } from 'react-redux';
import { delTodos, getTodos, putTodos } from '../../../store/modules/getAsync';

const TodoItem = ({ _id, text, isChk, createdAt }) => {
    const dispatch = useDispatch();

    const onChk = (e) => {
        dispatch(putTodos({ _id, text, isChk: e.target.checked }))
            .unwrap()
            .then(() => {
                dispatch(getTodos());
            })
            .catch((error) => {
                console.error('Todo 상태 변경 실패:', error);
            });
    };

    const onDel = () => {
        dispatch(delTodos(_id))
            .unwrap()
            .then(() => {
                dispatch(getTodos());
            })
            .catch((error) => {
                console.error('Todo 삭제 실패:', error);
            });
    };
    return (
        <li className={isChk ? 'on' : ''}>
            <div>
                <input type="checkbox" checked={isChk} onChange={onChk} />
                <em>{text} </em> / <em style={{ fontSize: 12 }}>({createdAt}) </em>
            </div>
            <button onClick={onDel}>삭제</button>
        </li>
    );
};

export default TodoItem;
