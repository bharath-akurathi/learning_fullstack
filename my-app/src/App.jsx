import { useState } from 'react'
import './App.css'

const showButton = () => {
  alert("Button clicked")
}

function App() {
  const [form, setForm] = useState({
    email: "hello",
    phno: ""
  })

  const handleEvent = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <button onClick={showButton}>Click me</button>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleEvent}
        placeholder="Enter email"
      ></input>

      <input type="tel" name="phno" value={form.phno} onChange={handleEvent}
        placeholder="Enter phone number"></input>

      <p>Email: {form.email}</p>
      <p>Phone: {form.phno}</p>
    </div>
  )
}

export default App
      

// import './App.css'
// import Navbar from './components/nav.jsx'
// import Card from './components/card.jsx'
// import { useState, useEffect, useRef} from 'react'

// function App() {
//   const [count, setCount] = useState(0) //initial value of the count variable
//   // useState updates the value of count and re-renders the component whenever setCount is called
  
//   // const [color, setColor] = useState(0)
  
//   // useRef will persist the value of the variable between renders without causing re-renders
//   const countRef = useRef(0)
  
//   // due to StrictMode in main.jsx, useEffect will run twice on mount in development mode
//   // Case 1: Run on every render 
//   useEffect(() => {
//     console.log("Hey I will run on every render")
//     console.log("Current count value (from state):", count)
//     console.log("Current count value (from ref):", countRef.current)
//     countRef.current = countRef.current + 1
//   })


//   // // Case 2: Run only on first render 
//   // useEffect(() => {
//   //   console.log("Hey welcome to my page. This is the first render")
//   //   console.log("App component mounted")
    
//   // }, [])
  
//   // // Case 3: Run when specific state/prop changes
//   // useEffect(() => {
//   //   setColor(color + 1)
//   //   console.log("The count value is updated:", count)
//   // }, [count]) //dependency array - useEffect runs only when count changes

//   //  Cleanup function example
//   // useEffect(() => {
//   //   console.log("Setting up an interval to log count every 2 seconds")
//   //   const interval = setInterval(() => {
//   //     console.log("Current count is:", count)
//   //   }, 2000)
//   //   // Cleanup function to clear the interval
//   //   return () => {
//   //     console.log(color)
//   //     console.log("Cleaning up the interval")
//   //     clearInterval(interval)
//   //   }
//   // }, [count])

//   return (
//     <>
//       <Navbar />
//       <div>hello world!!</div>
//       <div className='cards'>
//         <Card title="card 1" desc="card 1 desc" />
//         <Card title="card 2" desc="card 2 desc" />
//         <Card title="card 3" desc="card 3 desc" />
//       </div>
//       <div>
//         <button className='counter' onClick={() => setCount(count + 1)}>counter</button>
//         the count is {count}
//       </div>
//     </>
//   )
// }

// export default App
