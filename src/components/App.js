import React, { useState, useEffect } from 'react'
// React Router imports

// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
        </div>
      </nav>

      {/* Build a Switch with a Route for each of the components imported at the top */}
    </div>
  )
}
