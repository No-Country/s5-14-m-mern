import React, { useState } from "react";
import "./header.sass";
import logo from "../../../../assets/Icons/logoHeader.svg";
import logoM from "../../../../assets/Icons/logoHeaderM.svg";
import search from "../../../../assets/Icons/search.svg";
import user from "../../../../assets/Icons/usersquare.svg";
import menu from "../../../../assets/Icons/more.svg";
import arrow from "../../../../assets/Icons/arrow.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchM, setSearchM] = useState(false);

  const inputM = () => {
    setSearchM(!searchM);
  };

  return (
    <div className="header-content">
      {!searchM && <img className="mob" src={menu} />}
      {!searchM && <img className="logoHM" src={logo} />}
      {searchM && <img className="mob" src={arrow} onClick={inputM} />}
      {searchM && <img className="logoHM" src={logoM} />}
      {searchM && <input className="inputM" type="text" />}
      <img className="logoH" src={logo} />
      <input className="inputD" type="text" placeholder="Ej Matemáticas, Memoria..." />
      {!searchM && <img className="mob" src={search} onClick={inputM} />}
      <Link to="/login" className="mob">
        <img src={user} />
      </Link>
      <Link to="/login" className="login1">
        Iniciar sesión
      </Link>
    </div>
  );
};

export default Header;
