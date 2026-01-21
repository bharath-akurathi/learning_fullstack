import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("") // input text state
  const hasLoaded = useRef(false);
  const remainingCount = todos.length;

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    hasLoaded.current = true;
  }, []);

  useEffect(() => {
    if (!hasLoaded.current) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const Card = ({ params }) => {
    return (
      <div className="card">
        <input type="checkbox" className="checkbox" />
        <p className="todoText">{params.text}</p>
        <button className='edit'>
          <img src="/edit.png" width="16px" height="16px" alt="edit" /></button>
        <button className='delete' onClick={() => {
          setTodos(todos.filter((todo) => todo.id !== params.id));
        }}>
          <img src="/wrong.svg" width="12px" height="12px" alt="delete" />
        </button>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    if (!text.trim()) return; // prevent empty todos

    addTodo(text);
    setText(""); // clear input
  };

  const addTodo = (text) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        text,
        completed: false
      },
      ...prev
    ]);

  };

  return (
    <div className='mainSection'>
      <div className="heading">
        Your To Do
      </div>
      <form className="addSection" onSubmit={handleSubmit}>
        <input
          className="addTodo"
          placeholder="Add new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">+</button>
      </form>
      <div className="taskSection">
        {todos.map((item) => {
          return (<Card key={item.id} params={item} />);
        })
        }
      </div>
      <div className='Footer'>
        <i>Your remaining rodos : {todos.length}</i>
      </div>
      <div className='quote'>
        <i>"Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer</i>
      </div>
    </div>
  )
}
export default App