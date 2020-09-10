import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/customers" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/customers'} className="nav-link">
                Delete All
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={['/', '/customers']} component={CustomerList} />
          </Switch>
        </div>
      </Provider>
    </div>
  );
}

export default App;
