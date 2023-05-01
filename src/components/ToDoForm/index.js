import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/todoSlice";

const ToDoForm = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
                title: value,
            },
            setValue('')
        ))
    };

    return (
        <form className='todo__form' onSubmit={onSubmit} >

            <input
                className='todo__form-input'
                type='text'
                placeholder='Add todo...'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />

            <button className='todo__form-button' type='submit' >
                Submit
            </button>
        </form>
    );
};

export default ToDoForm;