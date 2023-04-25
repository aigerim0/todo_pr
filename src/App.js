import React from 'react';
import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";
import TotalItems from "./components/TotalItems";

const App = () => {
  return (
      <div>
  <h1>To Do List</h1>
          <ToDoForm/>
          <TodoList/>
          <TotalItems/>
      </div>
  );
};

export default App;
