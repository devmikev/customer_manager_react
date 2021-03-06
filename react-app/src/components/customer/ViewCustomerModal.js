import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const ViewCustomerModal = ({ current }) => {
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

  return (
    <div id="view-customer-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Customer:</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  disabled
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-field col s6">
                <input
                  disabled
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
                  disabled
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
                  disabled
                  id="line2"
                  type="text"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                />
              </div>
              <div className="input-field col s6">
                <input
                  disabled
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
                  disabled
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-field col s4">
                <input
                  disabled
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="input-field col s4">
                <input
                  disabled
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
                  disabled
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
        <a href="#!" className="modal-close waves-effect grey waves-dark btn">
          Exit
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

export default connect(mapStateToProps, {})(ViewCustomerModal);
