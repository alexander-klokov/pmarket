import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {Photos} from './pages/Photos'
import {Cart} from './pages/Cart'
import {Header} from './components/Header'

export const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Photos />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

    </Switch>
  </div>
)
