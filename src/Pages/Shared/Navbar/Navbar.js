import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink className="text-white text-xl rounded-2xl" to="/home">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="text-white text-xl rounded-2xl" to="/blog">
          Blog
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
            <NavLink className="text-white text-xl rounded-2xl" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <button
              className="text-white text-xl rounded-2xl"
              onClick={handleLogOut}
            >
              Signout
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink className="text-white text-xl rounded-2xl" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home" className="w-24 mx-auto lg:ml-2 ">
          <img className="rounded-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
