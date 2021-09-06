
import './App.css';
import Todo from './components/Todo';
import React, {useState} from 'react';
function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  // const [isDelete, setDelete] = useState("false");
const onFormSubmit=(e) => {
e.preventDefault();


setTodos([...todos,todo])
setTodo('')
}
const onFormchange=(e) => {
  setTodo(e.target.value)
}

  return (
    <>
      <h1>todos</h1>
      <form onSubmit={onFormSubmit} >
        <input value={todo} onChange={onFormchange} type="text" className="input" placeholder="Enter your todo" autoComplete="off"/>

        <ul className="todos">
          {
            
            todos.map((todo, i) => {
              return <Todo todo={todo} ></Todo>
            })
  }
   
          
        </ul>
      </form>
      <small>Left click to toggle completed. <br/> Right click to delete todo</small>
    </>  
  );
}

export default App;
