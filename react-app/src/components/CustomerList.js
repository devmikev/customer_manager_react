import React, { useState, useEffect } from 'react';
import CustomerDataService from '../services/CustomerServices';
import { Link } from 'react-router-dom';

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    retrieveCustomers();
  }, []);

  const retrieveCustomers = () => {
    CustomerDataService.getAll()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

export default CustomersList;
