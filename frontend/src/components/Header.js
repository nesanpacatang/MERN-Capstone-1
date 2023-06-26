import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/navbar-logo-light.png";
import React, { useState } from 'react';

export const Header = () => {
  const [dropdownCarsVisible, setDropdownCarsVisible] = useState(false);
  const [dropdownServicesVisible, setDropdownServicesVisible] = useState(false);

  const toggleDropdownCars = () => {
    setDropdownCarsVisible(!dropdownCarsVisible);
  };

  const toggleDropdownServices = () => {
    setDropdownServicesVisible(!dropdownServicesVisible);
  };

  const closeDropdowns = () => {
    setDropdownCarsVisible(false);
    setDropdownServicesVisible(false);
  };

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-white border-light border-b-2 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Cargo Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-6 h-6 transition-transform ${dropdownCarsVisible || dropdownServicesVisible ? 'transform rotate-180' : ''}`}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                exact
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={closeDropdowns}
              >
                Home
              </NavLink>
            </li>
            <li>
              <button
                id="dropdownCarsLink"
                data-dropdown-toggle="dropdownCars"
                onClick={toggleDropdownCars}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Cars
                <svg
                  className={`w-5 h-5 ml-1 ${dropdownCarsVisible ? 'transform rotate-180' : ''}`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownCars"
                className={`z-10 ${dropdownCarsVisible ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-300 ease-in-out font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownCarsLink"
                >
                  <li>
                    <NavLink
                      to="luxury"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeDropdowns}
                    >
                      Luxury
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="business"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeDropdowns}
                    >
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="bride"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeDropdowns}
                    >
                      Bride
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={closeDropdowns}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="branches"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={closeDropdowns}
              >
                Branches
              </NavLink>
            </li>
            <li>
              <button
                id="dropdownServicesLink"
                data-dropdown-toggle="dropdownServices"
                onClick={toggleDropdownServices}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Services
                <svg
                  className={`w-5 h-5 ml-1 ${dropdownServicesVisible ? 'transform rotate-180' : ''}`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownServices"
                className={`z-10 ${dropdownServicesVisible ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-300 ease-in-out font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownServicesLink"
                >
                  <li>
                    <NavLink
                      to="signin"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeDropdowns}
                    >
                      Signin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="reservation"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeDropdowns}
                    >
                      Reservation
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            {/* drivel */}
            <li>
              <NavLink
                to="driver"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={closeDropdowns}
              >
                Driver
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
