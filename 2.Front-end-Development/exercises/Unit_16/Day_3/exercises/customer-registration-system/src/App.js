import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import RegisterUser from './pages/register-user/register-user';
import RegisteredCustomers from './pages/registered-customers/registered-customers';
import UnregisteredCustomer from './pages/unregistered-customer/unregistered-customer';
import NotFound from './pages/not-found/not-found';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/unregistered-customers" render={ UnregisteredCustomer } />
        <Route exact path="/registered-customers" render={ RegisteredCustomers } />
        <Route exact path="/register-user" render={ RegisterUser } />
        <Route exact path="/login" render={ Login } />
        <Route exact path="/" render={ Home } />
        <Route exact path="*" render={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
