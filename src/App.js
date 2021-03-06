import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TSA from './Components/TSA/TSA'
import CTE from './Components/CTE/CTE'
import DesignBrief from './Components/DesignBrief/DesignBrief'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path='/' component={TSA} exact />
      <Route path='/CTE' component={CTE} exact />
      <Route path='/DesignBrief' component={DesignBrief} exact />
    </div>
  </BrowserRouter>
)

export default App
