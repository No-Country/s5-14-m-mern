import React from "react";
import "./navbar.sass";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/Icons/logo1.svg";

export const Navbar = () => {
  return (
    <div className="nav-content">
      <img className="logo" src={logo} />
      <div className="nav">
        <NavLink to="/">
          {({ isActive }) => <img className={isActive ? "gamesAc img" : "games img"} />}
        </NavLink>
      </div>
      <div className="nav">
        <NavLink to="/favourites">
          {({ isActive }) => <img className={isActive ? "favsAc img" : "favs img"} />}
        </NavLink>
      </div>
      <div className="nav">
        <NavLink to="/notifications">
          {({ isActive }) => <img className={isActive ? "notifAc img" : "notif img"} />}
        </NavLink>
      </div>
      <div className="nav">
        <NavLink to="/messages">
          {({ isActive }) => <img className={isActive ? "messagesAc img" : "messages img"} />}
        </NavLink>
      </div>
    </div>
  );
};
