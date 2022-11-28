import { useState } from "react";
import style from "./header.module.sass";
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
    <div className={style.header_content}>
      {!searchM && <img className={style.mob} src={menu} />}
      {!searchM && <img className={style.logoHM} src={logo} />}
      {searchM && <img className={style.mob} src={arrow} onClick={inputM} />}
      {searchM && <img className={style.logoHM} src={logoM} />}
      {searchM && <input className={style.inputM} type="text" />}
      <img className={style.logoH} src={logo} />
      <input className={style.inputD} type="text" placeholder="Ej Matemáticas, Memoria..." />
      {!searchM && <img className={style.mob} src={search} onClick={inputM} />}
      <Link to="/login" className={style.mob}>
        <img src={user} />
      </Link>
      <Link to="/login" className={style.login1}>
        Iniciar sesión
      </Link>
    </div>
  );
};

export default Header;
