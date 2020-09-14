import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCustomer } from "../../actions/customerActions";

const View = (props, state) => {
  // console.log(props.match.params.id);
  // console.log("stateFromRedux", state);
  // console.log("stateFromRedux", state.match.params.id);
  console.log(props);
  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  console.log("State coming back", state);
  return (
    <>
      <p>VIEW PAGE VIEW PAGE!!!!!!! AAAAHHHHH</p>
      {/* <p>First Name: {customer.firstName} </p>
      <p>Last Name: {customer.lastName} </p>
      <p>Phone: {customer.phone} </p>
      <p>Line 1: {customer.line1} </p>
      <p>Line 2: {customer.line2} </p>
      <p>City: {customer.city} </p>
      <p>State: {customer.state} </p>
      <p>zip: {customer.zip} </p> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  state: state.customer,
});

export default connect(mapStateToProps, { getCustomer })(View);
