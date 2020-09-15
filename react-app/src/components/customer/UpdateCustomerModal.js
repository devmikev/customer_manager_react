import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateCustomer } from "../../actions/customerActions";
import M from "materialize-css/dist/js/materialize.min.js";

const UpdateCustomerModal = ({ current, updateCustomer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (current) {
      setFirstName(current.firstName);
      setLastName(current.lastName);
      setLine1(current.line1);
      setLine2(current.line2);
      setCity(current.city);
      setState(current.state);
      setZip(current.zip);
      setPhone(current.phone);
      setEmail(current.email);
    }
  }, [current]);

  const onSubmit = () => {
    const updatedCustomer = {
      id: current.id,
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

    updateCustomer(updatedCustomer.id, updatedCustomer);
    M.toast({ html: `Customer updated.` });

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
    <div id="update-customer-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit:</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-field col s6">
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="line1"
                  type="text"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="line2"
                  type="text"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                />
              </div>
              <div className="input-field col s6">
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-field col s4">
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="input-field col s4">
                <input
                  id="zip"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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

const mapStateToProps = (state) => ({
  current: state.customer.current,
});

export default connect(mapStateToProps, { updateCustomer })(
  UpdateCustomerModal
);
