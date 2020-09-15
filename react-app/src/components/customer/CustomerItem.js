import React from "react";
import { connect } from "react-redux";
import { setCurrent } from "../../actions/customerActions";

import M from "materialize-css/dist/js/materialize.min.js";

const CustomerItem = ({ customer, setCurrent }) => {
  const updateCurrent = () => {
    setCurrent(customer);
  };

  return (
    <li className="collection-item">
      <div>
        <br />
        <span className="grey-text">
          <span className="black-text">{customer.firstName}</span>{" "}
          <span className="black-text">{customer.lastName}</span>{" "}
        </span>
        <a
          href="#delete-customer-modal"
          className="secondary-content modal-trigger"
          onClick={() => updateCurrent(customer)}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          href="#update-customer-modal"
          className="modal-trigger secondary-content"
          onClick={() => updateCurrent(customer)}
        >
          <i className="material-icons grey-text">edit</i>
        </a>
        <a
          href="#view-customer-modal"
          className="modal-trigger secondary-content"
          onClick={() => updateCurrent(customer)}
        >
          <i className="material-icons grey-text">person</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { setCurrent })(CustomerItem);
