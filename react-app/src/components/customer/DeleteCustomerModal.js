import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCustomer } from "../../actions/customerActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DeleteCustomerModal = ({ customer, deleteCustomer }) => {
  const onDelete = () => {
    console.log("onDelete pressed", customer.current.id);
    deleteCustomer(customer.current.id);
    M.toast({ html: "Customer Deleted" });
  };

  return (
    <div id="delete-customer-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Delete Customer?</h4>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onDelete}
          className="modal-close waves-effect grey btn"
        >
          Confirm
        </a>
        <a href="#!" className="modal-close waves-effect grey btn">
          Cancel
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "25%",
  height: "25%",
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps, { deleteCustomer })(
  DeleteCustomerModal
);
