import React, { useState } from "react";
import { connect } from "react-redux";
import { addCustomer } from "../../actions/customerActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddCustomerModal = ({ addCustomer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    const newCustomer = {
      firstName,
      lastName,
      line1,
      line2,
      city,
      state,
      zip,
      phone,
      email,
    };

    console.log(newCustomer);

    addCustomer(newCustomer);

    // M.toast({ html: `Customer added` });

    // Clear Fields
    setFirstName("");
    setLastName("");
    setLine1("");
    setLine2("");
    setCity("");
    setState("");
    setZip("");
    setPhone("");
    setEmail("");
  };

  return (
    <div id="add-customer-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Customer:</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="line1"
                  type="text"
                  className="validate"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                />
                <label htmlFor="line1">Street</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="line2"
                  type="text"
                  className="validate"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                />
                <label htmlFor="line2">Unit/Apt/Suite</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="phone"
                  type="text"
                  className="validate"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input
                  id="city"
                  type="text"
                  className="validate"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="state"
                  type="text"
                  className="validate"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="state">State</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="zip"
                  type="text"
                  className="validate"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
                <label htmlFor="zip">Zip</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect grey waves-dark btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addCustomer })(AddCustomerModal);
