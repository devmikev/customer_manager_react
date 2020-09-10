import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCustomers } from '../redux/customer/actions';

const CustomersList = ({ state: { customers }, getCustomers }) => {
  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      {customers.map((customer) => {
        return (
          <li key={customer.id}>
            {customer.firstName}
            {customer.lastName}
          </li>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.customer,
});

export default connect(mapStateToProps, { getCustomers })(CustomersList);
