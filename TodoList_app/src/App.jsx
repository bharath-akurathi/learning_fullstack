import { useState, useEffect, useRef } from 'react'
import './App.css'
import editIcon from "./assets/edit.png";
import deleteIcon from "./assets/wrong.svg";

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState("")
  const hasLoaded = useRef(false);
  const remainingCount = todos.filter(todo => !todo.completed).length;

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

  const handleCheckbox = (todo) => {
    setTodos(prev => // prev represents the previous state of the todos array.
      prev.map(item =>
        item.id === todo.id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const saveEdit = (item_id) => {
    if (!editingText.trim()) {
      setEditingId(null);
      return;
    }
    setTodos(prev =>
      prev.map(item =>
        item.id === item_id
          ? { ...item, text: editingText }
          : item
      )
    );
    setEditingId(null);
  }

  const Card = ({ params }) => {
    const inputRef = useRef(null);

    useEffect(() => {
      if (editingId === params.id) {
        inputRef.current?.focus();
      }
    });

    return (
      <div className="card">
        <input type="checkbox"
          checked={params.completed}
          onChange={() => handleCheckbox(params)}
          className="checkbox" />

        {(editingId === params.id)
          ? <input
            ref={inputRef}
            className="editInput"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onBlur={() => saveEdit(params.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit(params.id);
              if (e.key === "Escape") setEditingId(null);
            }}
          />
          : <p className={`todoText ${params.completed ? "completed" : ""}`}>
            {params.text}
          </p>
        }

        <button className='edit' onClick={() => {
          setEditingId(params.id)
          setEditingText(params.text)
        }}><img src={editIcon} width="16px" height="16px" alt="edit" /></button>

        <button className='delete' onClick={() => {
          setTodos(prev => prev.filter((todo) => todo.id !== params.id)); // Remove the todo whose id equals params.id
          // For each todo in the list: Keep it only if its id does NOT match params.id.
        }}>
          <img src={deleteIcon} width="12px" height="12px" alt="delete" />
        </button>
      </div >
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
        {remainingCount === 0 ? <i>Your remaining rodos : {remainingCount} :) Hurray! All tasks are done</i> :
          <i>Your remaining rodos : {remainingCount} -- work up!</i>}
      </div>
      <div className='quote'>
        <i>"Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer</i>
      </div>
    </div>
  )
}
export default App