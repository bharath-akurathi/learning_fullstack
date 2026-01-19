// You have to use an api and display the data in the form of a card 
// under a container. All the data points returned by the API should
//  be converted to a card Use this API: 
// https://jsonplaceholder.typicode.com/posts

// Hint: Create a state for the data which will be fetched using 
// the Json Placeholder API Inside useEffect, use fetch to populate 
// that state and then use map to render the cards from that state

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './nav.jsx'
import Navbar from './nav.jsx'
import './card.css'

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}

const Card = ({ params }) => {
  return (
    <div className="card">
      <div className='title_area'><h2>{params.id}. {params.title}</h2></div>
      <p>{params.body}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState([])

  useEffect(() => {
    getData().then((value) => {
      setdata(value)
      setLoading(false)   // 👈 data loaded
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="cardSection">
        {loading ? (
          <div className="loader"></div>
        ) : (
          data.map((item) => (
            <Card key={item.id} params={item} />
          ))
        )}
      </div>
    </>
  )
}

export default App
