import React from 'react';
import { useSelector } from "react-redux";

const TotalItems = () => {
    const completedTodos = useSelector( ( state ) =>
         state.todos.filter((todo) => todo.completed === true) )


    return <h4 className='app__total' >Total Complete Items: {completedTodos.length}</h4>

};

export default TotalItems;