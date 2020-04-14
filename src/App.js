import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {PageHome} from './containers/home/Home'
import {PageAbout} from './containers/about/About'

export const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>

    <Switch>
      <Route path="/about">
        <PageAbout />
      </Route>

      <Route path="/">
        <PageHome />
      </Route>

    </Switch>
  </Router>
)
