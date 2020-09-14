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
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a first and last name." });
    } else {
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

      addCustomer(newCustomer);

      M.toast({ html: `Customer added` });

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
    }
  };

  return (
    <div id="add-customer-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Customer:</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="firstName" type="text" className="validate" />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="lastName" type="text" className="validate" />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="street" type="text" className="validate" />
                <label htmlFor="street">Street</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="line2" type="text" className="validate" />
                <label htmlFor="line2">Unit/Apt/Suite</label>
              </div>
              <div className="input-field col s6">
                <input id="phone" type="text" className="validate" />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="city" type="text" className="validate" />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s6">
                <input id="State" type="text" className="validate" />
                <label htmlFor="State">State</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
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
