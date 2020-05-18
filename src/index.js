import React from 'react'
import { render } from 'react-dom'

// 👉 Importing the top-level component
import App from './components/App'

// 👉 Importing the styles
import './styles.less'

// 👉 Import React Router's Router

render(
  // Wrap the <App /> in a provider
  <App />
  , document.querySelector('#root')
)
