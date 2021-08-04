import React, { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import { Route, Link, Switch } from 'react-router-dom'

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

function NavBar() {
return ( <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to='/'>Home</Link>
          <Link to="/items-list">Shop</Link>
        </div>
      </nav>)
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
  
      <Route 
        path='/'
        component={NavBar}
      />


      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      {/* Route takes: path, 
                       component OR render OR give it a child in the normal way, 
                       exact (optional)

                       */}

     <Switch>
    {/*         forward slash!!   */}
      <Route path='/items-list/:itemId'>
        <Item items={stock} />
      </Route>

       <Route path='/items-list'>
         <ItemsList items={stock} />
       </Route>

      <Route 
        path='/'
        component={Home}
      />


     </Switch>

    </div>
  )
}
