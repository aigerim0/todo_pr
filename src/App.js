import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";
import TotalItems from "./components/TotalItems";
import './App.scss'

const App = () => {
  return (
      <div className='container'>
<div className="app">
    <h1 className='app__title'>To Do List</h1>
    <ToDoForm/>
    <TodoList/>
    <TotalItems/>
</div>
      </div>
  );
};

export default App;
