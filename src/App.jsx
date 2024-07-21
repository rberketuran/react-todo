import { useState } from "react"
import "./index.css"

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newTodo,
          completed: false,
        },
      ];
    });


    setNewTodo("");
  }

  const handleCheckbox = (e) => {
    e.target.parentElement.querySelector('span').classList.toggle("line-through");
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input input-bordered"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Todo
        </button>
      </form>
      <div className="w-1/5">
        <ul className="flex flex-col mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" onClick={(e) => handleCheckbox(e)} />
              <span className="mx-2">{todo.title}</span>
              <button
                className="btn btn-error ml-auto"
                onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
