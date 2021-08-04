import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router

// import and rename the named export
import { BrowserRouter } from 'react-router-dom'

render(
  // Wrap the <App /> in a provider
  // That way the provider can pass props down to all the component children
  // Just like we did with styled components
    <BrowserRouter>
      <App />
    </BrowserRouter>
  , document.querySelector('#root')
)
