import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Alert } from '../src/components/Alert'
import { About } from './pages/About'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/GithubState'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test alert' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App;
