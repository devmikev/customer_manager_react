import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import { getCustomers } from "../../actions/customerActions";
import CustomerItem from "./CustomerItem";

const CustomerList = ({ customer: { customers, loading }, getCustomers }) => {
  useEffect(() => {
    getCustomers();
  }, []);

  if (loading || customers === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <div className="row"></div>
      </li>

      {!loading && customers.length === 0 ? (
        <p className="center">No customers to show...</p>
      ) : (
        customers.map((customer) => (
          <CustomerItem key={customer.id} customer={customer}></CustomerItem>
        ))
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps, { getCustomers })(CustomerList);
