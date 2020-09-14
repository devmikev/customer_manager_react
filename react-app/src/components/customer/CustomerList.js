import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import { getCustomers } from "../../actions/customerActions";
import CustomerItem from "./CustomerItem";

const CustomerList = ({
  customer: { customers, loading, searchText },
  getCustomers,
}) => {
  const [filtered, setFiltered] = useState(customers);
  console.log("Initial Filtered", customers);

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    // console.log("SearchText updated: ", searchText);

    if (searchText.trim().length === 0 || searchText === null) {
      // console.log("Please enter a query");
      setFiltered(customers);
    } else {
      const filteredCustomers = customers.filter(
        (customer) =>
          customer.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          customer.lastName.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filteredCustomers);
    }
    //   customers.filter((customer) => {
    //     customer.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    //       customer.lastName.toLowerCase().includes(searchText.toLowerCase());
    //   });

    //   console.log("Filtered", filtered);
    // }
  }, [searchText]);

  // console.log("searchText", searchText);

  // let filtered = customers;

  if (loading || customers === null) {
    return <Preloader />;
  }

  function filter(c) {
    if (!searchText) {
      return true;
    }
    return (
      c.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      c.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Customers</h4>
        <div className="row"></div>
      </li>

      {!loading && customers.length === 0 ? (
        <p className="center">No customers to show...</p>
      ) : (
        customers
          .filter(filter)
          .map((customer) => (
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
