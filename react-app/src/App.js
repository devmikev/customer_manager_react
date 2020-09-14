import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import CustomerList from "./components/customer/CustomerList";
import Create from "./components/customer/CreateCustomerModal";
import View from "./components/customer/ViewCustomerModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="myBody">
      <Provider store={store}>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/customers" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/customers"} className="nav-link">
                Delete All
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/customers"]} component={CustomerList} />
            <Route exact path={["/add", "/customers"]} component={Create} />
            <Route
              exact
              path={["/customers/:id", "/customers"]}
              component={View}
            />
            {/* <Route exact path="/:id" component={View} /> */}
            {/* <Route exact path="/edit/:id" component={Edit} /> */}
          </Switch>
        </div>
      </Provider>
    </div>
  );
}

export default App;
