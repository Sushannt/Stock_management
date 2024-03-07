import React from "react";
import { Link } from "react-router-dom";
 import logo from '../image/nagar-nigam.jpg'
function Header() {
  return (
    <div className="dashboard-header bg-light" style={{ zIndex: 10 }}>
      <nav className="navbar navbar-expand-lg bg-light-gray fixed-top">
       
        <Link to="/dashboard" className="navbar-brand">
        <img src={logo} width={50} className='m-l-20'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            <li className="nav-item">
              <div id="custom-search" className="top-search-bar">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search.."
                />
              </div>
            </li>
            <li className="nav-item dropdown notification">
              <Link
                className="nav-link nav-icons"
                to="#"
                id="navbarDropdownMenuLink1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-fw fa-bell"></i>{" "}
                <span className="indicator"></span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                <li>
                  <div className="notification-title"> Notification</div>
                  <div className="notification-list"></div>
                </li>
                <li>
                  <div className="list-footer">
                    {" "}
                    <Link to="#">View all notifications</Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown connection">
              <Link
                className="nav-link"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="fas fa-fw fa-th"></i>{" "}
              </Link>
              <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                <li className="connection-list">
                  <div className="row"></div>
                </li>
                <li>
                  <div className="conntection-footer">
                    <Link to="#">More</Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown nav-user">
              <Link
                className="nav-link nav-user-img"
                id="navbarDropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="assets/images/avatar-1.jpg"
                  alt=""
                  className="user-avatar-md rounded-circle"
                />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <div className="nav-user-info">
                  <h5 className="mb-0 text-white nav-user-name">Saurav </h5>
                  <span className="status"></span>
                  <span className="ml-2">Available</span>
                </div>
                <Link className="dropdown-item">
                  <i className="fas fa-user mr-2"></i>Account
                </Link>
                <Link className="dropdown-item">
                  <i className="fas fa-cog mr-2"></i>Setting
                </Link>
                <Link to="/" className="dropdown-item">
                  <i className="fas fa-power-off mr-2"></i>Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
