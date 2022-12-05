// libraries
import { useMediaQuery } from "react-responsive";

// components
import MobileMessagePage from "../../components/MessageComponents/MobileMessagePage";
import DesktopMessagePage from "../../components/MessageComponents/DesktopMessagePage";

// styles
import classes from "./messages.module.sass";

// no logueado
import noSigned from "../../../assets/Icons/noSignMessages.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Messages = () => {
  const { userLogged } = useSelector(state => state.auth);
  const [isLogged] = useState(userLogged);
  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  return (
    <div className={classes.messages_content}>
      {/* Logueado */}
      {isLogged && (isTablet ? <DesktopMessagePage /> : <MobileMessagePage />)}
      {/* No logueado */}
      {!isLogged && (
        <div className={classes.not_logged}>
          <img src={noSigned} alt="" />
          <h3>Inicia sesión para ver los mensajes</h3>
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Messages;
