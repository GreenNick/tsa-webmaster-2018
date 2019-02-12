import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TSA from './Components/TSA/TSA'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path='/' component={TSA} exact />
    </div>
  </BrowserRouter>
)

export default App
