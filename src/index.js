import React from 'react'
import { render } from 'react-dom'

// 👉 Importing React Router's Router
import { BrowserRouter as Router } from 'react-router-dom'

// 👉 Importing the top-level component
import App from './components/App'

// 👉 Importing the styles
import './styles.less'

render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)
