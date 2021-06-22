import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess'


class App extends Component {
  render() {
    const user = {
      username: 'joao',
      password: '1234',
    }
    return (
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
              <Link to="/strict-access">Strict Acess</Link>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/users/:id" render={ (props) => <Users {...props} greetingMessage="Good Morning" /> } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/strict-access" render={ () => <StrictAccess user={ user } /> } />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
