import React from "react";

function Pagination({ customersPerPage, totalCustomers, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="waves-effect"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
