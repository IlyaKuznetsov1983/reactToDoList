import {useState} from 'react'
import ToDo from './Todo';
import ToDoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = () => {

  }
  const removeTask = () => {
    
  }

  const handleToggle = () => {
    
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo
          todo={todo}
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )
      })}

     
    </div>
  );
}

export default App;
