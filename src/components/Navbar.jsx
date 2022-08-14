import React from "react";
import { TiHome } from "react-icons/ti";
import { GoCalendar, GoSearch } from "react-icons/go";
import { FaTv } from "react-icons/fa";
import { BiMovie } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../images/logo_icon.svg";
const Navbar = () => {
  let activeStyle = {
    boxShadow: "-5px 0 0 #cf0e0e",
  };
  return (
    <aside className="container__nav">
      <nav className="nav">
        <ul className="nav__list">
          <NavLink
            to=""
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__logo">
              <img src={logo} className="nav__icon" />
            </li>
          </NavLink>
          <NavLink
            to="search"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__item">
              <GoSearch className="nav__icon" />
              <span className="nav__description">Search</span>
            </li>
          </NavLink>
          <NavLink
            to=""
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__item">
              <TiHome className="nav__icon" />
              <span className="nav__description">Home</span>
            </li>
          </NavLink>
          <NavLink
            to="series"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__item">
              <FaTv className="nav__icon" />
              <span className="nav__description">Series</span>
            </li>
          </NavLink>
          <NavLink
            to="movies"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__item">
              <BiMovie className="nav__icon" />
              <span className="nav__description">Movies</span>
            </li>
          </NavLink>
          <NavLink
            to="calendar"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__item">
              <GoCalendar className="nav__icon" />
              <span className="nav__description">Coming</span>
            </li>
          </NavLink>
          <NavLink
            to="info"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav__item">
              <BsInfoCircle className="nav__icon" />
              <span className="nav__description">Info</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
