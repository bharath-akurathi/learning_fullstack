import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showBtn, setShowBtn] = useState(false)

  const [todo, setTodo] = useState([
    {
      title: "Todo 1",
      desc: "Desc of Todo 1"
    }, {
      title: "Todo 2",
      desc: "Desc of Todo 2"
    }, {
      title: "Todo 3",
      desc: "Desc of Todo 3"
    }
  ])

  const TodoPlate = ({ todo }) => {
    return (
      <>
        <div className="hello">
          <div className="todot">{todo.title}</div>
          <div className="todod">{todo.desc}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {todo.map((todo, index) => (
        <TodoPlate key={index} todo={todo} />
      ))}

      {showBtn ? <code>Switch is on</code> : <p>Switch is off</p>}

      {/* {showBtn&&<p>Switch is on</p>} */}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle switch
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
