import { useEffect, useState } from "react";
import style from "./header.module.sass";
import logo from "../../../../assets/Icons/logoHeader.svg";
import logoM from "../../../../assets/Icons/logoHeaderM.svg";
import search from "../../../../assets/Icons/search.svg";
import user from "../../../../assets/Icons/usersquare.svg";
import arrow from "../../../../assets/Icons/arrow.svg";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../../../assets/AccountAvatars/avatar2.png";
// Como obtener datos de redux
import { useSelector, useDispatch } from "react-redux"; // Importar use Selector
import { logout } from "../../../redux/slices/auth";
import { resetUser } from "../../../redux/slices/user";
import { getUserLogged } from "../../../redux/slices/user/userAction";
import { changeFilter } from "../../../redux/slices/filter";

const Header = () => {
  const [searchM, setSearchM] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { userInfo } = useSelector(state => state.user); // Obtenemos lo que contiene userinfo desde el slice user. (hay user y auth)
  const { userLogged } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // User tiene userInfo con todos los datos del usuario completos.
  // Auth solo tiene si esta logueado o no: en userLogged tiene el id, el rol, y en userToken tiene el token.

  const { filter } = useSelector(state => state.filter);

  const inputM = () => {
    setSearchM(!searchM);
  };

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(resetUser());
  };

  const handleMenu = () => setUserMenu(!userMenu);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!userInfo && userLogged) {
      dispatch(getUserLogged(userLogged.id));
    }
  }, [userInfo]);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.header_content}>
      {pathname === "/" && !searchM && <img className={style.logoHM} src={logo} />}
      {pathname === "/" && searchM && <img className={style.mob} src={arrow} onClick={inputM} />}
      {pathname === "/" && searchM && <img className={style.logoHM} src={logoM} />}
      {pathname === "/" && searchM && (
        <input className={style.inputM} type="text" value={filter} onChange={handleChange} />
      )}
      <img className={style.logoH} src={logo} />
      {pathname === "/" && (
        <input
          className={style.inputD}
          type="text"
          placeholder="Ej Matemáticas, Memoria..."
          value={filter}
          onChange={handleChange}
        />
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
      {!userLogged && (
        <Link to="/login" className={style.mob}>
          <img src={user} />
        </Link>
      )}
      {!userLogged && (
        <Link to="/login" className={style.login1}>
          Iniciar sesión
        </Link>
      )}
      {userLogged && (
        <div className={style.user_container} onClick={handleMenu}>
          <div className={style.user}>
            {!userMenu && <i className="bi bi-caret-down-fill"></i>}
            {userMenu && <i className="bi bi-caret-up-fill"></i>}
            <img src={userInfo.avatar?.path || avatar} />
          </div>
          {userMenu && (
            <ul className={style.menu}>
              <li>
                <Link to="/account">
                  <p>Perfil</p>
                </Link>
              </li>
              {userLogged?.role === "admin" && (
                <li>
                  <Link>
                    <p>Panel Admin</p>
                  </Link>
                </li>
              )}
              <li onClick={logoutHandler}>
                <p>Cerrar sesión</p>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
