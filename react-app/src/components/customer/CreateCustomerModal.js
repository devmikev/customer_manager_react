import React, { useState } from "react";
import CustomerDataService from "../../services/CustomerService";
import { withRouter } from "react-router-dom";

const AddCustomer = (props) => {
  // const initialCustomerState = {};
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });
  // const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const saveCustomer = () => {
    var data = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      line1: customer.line1,
      line2: customer.line2,
      city: customer.city,
      state: customer.state,
      zip: customer.zip,
      phone: customer.phone,
      email: customer.email,
    };

    CustomerDataService.create(data)
      .then((response) => {
        setCustomer({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          line1: response.data.line1,
          line2: response.data.line2,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          phone: response.data.phone,
          email: response.data.email,
        });
        // setSubmitted(true);
        console.log(response.data);
        props.history.push("/");
      })
      .catch((e) => {
        props.history.push("/");
        console.log(e);
      });
  };

  // const newCustomer = () => {
  //   setCustomer(initialCustomerState);
  //   // setSubmitted(false);
  // };

  return (
    <div className="submit-form">
      {/* {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
        </div>
      ) : ( */}
      <div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            required
            value={customer.firstName}
            onChange={handleInputChange}
            name="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            required
            value={customer.lastName}
            onChange={handleInputChange}
            name="lastName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="line1">Line 1</label>
          <input
            type="text"
            className="form-control"
            id="line1"
            required
            value={customer.line1}
            onChange={handleInputChange}
            name="line1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="line2">Line 2</label>
          <input
            type="text"
            className="form-control"
            id="line2"
            required
            value={customer.line2}
            onChange={handleInputChange}
            name="line2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            required
            value={customer.city}
            onChange={handleInputChange}
            name="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            required
            value={customer.state}
            onChange={handleInputChange}
            name="state"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            required
            value={customer.zip}
            onChange={handleInputChange}
            name="zip"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            required
            value={customer.phone}
            onChange={handleInputChange}
            name="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={customer.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>

        <button onClick={saveCustomer} className="btn btn-success">
          Submit
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default AddCustomer;
