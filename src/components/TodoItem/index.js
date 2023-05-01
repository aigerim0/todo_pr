import { useDispatch } from "react-redux";
import { toggleComplete,deleteTodo } from "../../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch()

    const handleCompleteClick = () => {
        dispatch(toggleComplete( {id: id, completed: !completed}))
    }
    const handleDeleteClick = () => {
dispatch(deleteTodo({id: id}))
    }

    return (

    <li className='todo__item' >
        <div>
				<p className='todo__item-title' >
					<input
                        type='checkbox'
                        checked={completed}
                        onChange={handleCompleteClick}
                        className='todo__item-input'
                    />
                    {title}
				</p>
            <button  className='todo__item-button' onClick={handleDeleteClick} >Delete</button>
        </div>
    </li>

    );
};

export default TodoItem;