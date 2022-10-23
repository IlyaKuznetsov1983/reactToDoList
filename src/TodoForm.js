import {useState} from 'react'

function ToDoForm() {
    const [userInput, setUserInput] = useState ('')

  

    const handleChange = () =>{

    }

    const handleSubmit = () =>{

    }
    
    const handleKeyPress = () =>{

    }

    return (
    <form onSubmit={handleSubmit}>
       <input
       value={userInput}
       type="text"
       onChange={handleChange}
       onKeyDown={handleKeyPress}
       placeholder="type to search"
       />


    </form>)
}

export default ToDoForm