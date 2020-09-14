import React, { Fragment, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import CustomerList from "./components/customer/CustomerList";
import AppNavbar from "./components/layout/AppNavbar";
import AddCustomerModal from "./components/customer/AddCustomerModal";
import DeleteCustomerModal from "./components/customer/DeleteCustomerModal";
import UpdateCustomerModal from "./components/customer/UpdateCustomerModal";
import ViewCustomerModal from "./components/customer/ViewCustomerModal";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <AppNavbar />
        <div className="container">
          <CustomerList />
          <AddCustomerModal />
          <DeleteCustomerModal />
          <UpdateCustomerModal />
          <ViewCustomerModal />
        </div>
      </Fragment>
    </Provider>
    //       <Switch>
    //         <Route exact path={["/", "/customers"]} component={CustomerList} />
    //         <Route exact path={["/add", "/customers"]} component={Create} />
    //         <Route
    //           exact
    //           path={["/customers/:id", "/customers"]}
    //           component={View}
    //         />
    //         {/* <Route exact path="/:id" component={View} /> */}
    //         {/* <Route exact path="/edit/:id" component={Edit} /> */}
    //       </Switch>
  );
}

export default App;
