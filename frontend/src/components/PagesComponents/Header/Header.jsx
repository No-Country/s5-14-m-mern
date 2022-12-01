import { useEffect, useState } from "react";
import style from "./header.module.sass";
import logo from "../../../../assets/Icons/logoHeader.svg";
import logoM from "../../../../assets/Icons/logoHeaderM.svg";
import search from "../../../../assets/Icons/search.svg";
import user from "../../../../assets/Icons/usersquare.svg";
import arrow from "../../../../assets/Icons/arrow.svg";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../../../assets/AccountAvatars/avatar2.svg";

const Header = () => {
  const [searchM, setSearchM] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const [userMenu, setUserMenu] = useState(false);
  const [isAdmin] = useState(true);

  const inputM = () => {
    setSearchM(!searchM);
  };

  const handleMenu = () => setUserMenu(!userMenu);
  const handleSign = () => setIsLogged(!isLogged);

  const { pathname } = useLocation();

  useEffect(() => {
    setUserMenu(false);
  }, [pathname]);

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
        pathname === "/messages" ||
        pathname === "/account" ||
        pathname.substring(0, 6) === "/games") && (
        <Link to="/" className={style.mob}>
          <img src={arrow} />
        </Link>
      )}
      {pathname === "/favourites" && <h2 className={style.title}>Favoritos</h2>}
      {pathname === "/notifications" && <h2 className={style.title}>Notificaciones</h2>}
      {pathname === "/messages" && <h2 className={style.title}>Mensajes</h2>}
      {pathname === "/account" && <h2 className={style.title}>Perfíl</h2>}
      {pathname.substring(0, 6) === "/games" && <h2 className={style.title}>Juegos</h2>}
      {pathname === "/" && !searchM && <img className={style.mob} src={search} onClick={inputM} />}
      {!isLogged && (
        <Link to="/login" className={style.mob}>
          <img src={user} />
        </Link>
      )}
      {!isLogged && (
        <Link to="/login" className={style.login1}>
          Iniciar sesión
        </Link>
      )}
      {isLogged && (
        <div className={style.user_container} onClick={handleMenu}>
          <div className={style.user}>
            {!userMenu && <i className="bi bi-caret-down-fill"></i>}
            {userMenu && <i className="bi bi-caret-up-fill"></i>}
            <img src={avatar} />
          </div>
          {userMenu && (
            <div className={style.menu}>
              <Link to="/account">
                <p>Perfil</p>
              </Link>
              {isAdmin && (
                <Link>
                  <p>Panel Administrador</p>
                </Link>
              )}
              <p onClick={handleSign}>Cerrar sesión</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
