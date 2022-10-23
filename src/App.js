import {useState} from 'react'
import ToDo from './Todo';
import ToDoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }

  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo)=> todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([...todos.Map((todo)=> todo.id === id ? {...todo, complete: !todo.complete}: {...todo})])
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
