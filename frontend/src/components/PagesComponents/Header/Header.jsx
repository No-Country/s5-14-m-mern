import { useEffect, useState } from "react";
import style from "./header.module.sass";
import logo from "../../../../assets/Icons/logoHeader.svg";
import logoM from "../../../../assets/Icons/logoHeaderM.svg";
import search from "../../../../assets/Icons/search.svg";
import user from "../../../../assets/Icons/usersquare.svg";
import arrow from "../../../../assets/Icons/arrow.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [searchM, setSearchM] = useState(false);

  const inputM = () => {
    setSearchM(!searchM);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
  }, [location]);

  return (
    <div className={style.header_content}>
      {pathname === "/" && !searchM && <img className={style.logoHM} src={logo} />}
      {pathname === "/" && searchM && <img className={style.mob} src={arrow} onClick={inputM} />}
      {pathname === "/" && searchM && <img className={style.logoHM} src={logoM} />}
      {pathname === "/" && searchM && <input className={style.inputM} type="text" />}
      <img className={style.logoH} src={logo} />
      {pathname === "/" && (
        <input className={style.inputD} type="text" placeholder="Ej Matemáticas, Memoria..." />
      )}
      {(pathname === "/favourites" ||
        pathname === "/notifications" ||
        pathname === "/messages") && (
        <Link to="/" className={style.mob}>
          <img src={arrow} />
        </Link>
      )}
      {pathname === "/favourites" && <h2 className={style.title}>Favoritos</h2>}
      {pathname === "/notifications" && <h2 className={style.title}>Notificaciones</h2>}
      {pathname === "/messages" && <h2 className={style.title}>Mensajes</h2>}
      {pathname === "/" && !searchM && <img className={style.mob} src={search} onClick={inputM} />}
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
