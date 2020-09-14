import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomers, setCustomerId } from "../../actions/customerActions";

const CustomersList = (props) => {
  const { stateFromStore, getCustomers } = props;
  useEffect(() => {
    getCustomers();
  }, []);

  console.log("StateFromGlobalStore", stateFromStore);

  function updateCurrentUserChangeView(id) {
    props.setCustomerId(id);
    console.log("Set Customer ID to: ", stateFromStore);
  }

  return (
    <div id="customer-list">
      {stateFromStore.customers.map((customer) => {
        return (
          <div className="card cardMargin">
            <div className="card-header container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <h3 className="w-75 p-3" key={`customer-${customer.id}`}>
                    {customer.firstName} {customer.lastName}
                  </h3>
                </div>

                <div className="col-md-3 float-right">
                  <div className={`btn-group cardButtons`}>
                    <a
                      onClick={() => updateCurrentUserChangeView(customer)}
                      className="btn btn-secondary"
                    >
                      View
                    </a>
                    <a href="#" className="btn btn-secondary">
                      Update
                    </a>
                    <a href="#" className="btn btn-secondary">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateFromStore: state.customer,
});

export default connect(mapStateToProps, { getCustomers, setCustomerId })(
  CustomersList
);
