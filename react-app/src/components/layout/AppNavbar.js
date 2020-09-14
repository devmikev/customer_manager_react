import React, { useRef } from "react";
import { connect } from "react-redux";
import { setSearchText } from "../../actions/customerActions";

const AppNavbar = ({ customer, setSearchText }) => {
  const onChange = (e) => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
    // console.log(customer);
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="#" className="brand-logo center">
            Customer Manager
          </a>
          <div className="right">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  style={searchInput}
                  placeholder="Search Customers"
                  // ref={text}
                  // value={searchText}
                  onChange={onChange}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
          <ul className="left">
            <li>
              <a
                href="#add-customer-modal"
                className="modal-trigger"
                // onClick={() => setCurrent(customer)}
              >
                <i className="material-icons grey-text">group-add</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const searchInput = {
  height: "64px",
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps, { setSearchText })(AppNavbar);
