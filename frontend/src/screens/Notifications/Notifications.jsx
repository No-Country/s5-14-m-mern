import style from "./notifications.module.sass";
// import avatar from "../../../assets/AccountAvatars/avatar4.svg";
// import chess from "../../../assets/Imagescards/chess.svg";
// import english from "../../../assets/Imagescards/english.svg";
// import logoM from "../../../assets/Icons/logoHeaderM.svg";
// import Card from "../../components/PagesComponents/Card/Card";
import noSigned from "../../../assets/Icons/noSignNotif.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotificationCard from "../../components/PagesComponents/NotificationCard/NotificationCard";

const data = [
  {
    mode: "challenge",
    avatar: "../../../assets/AccountAvatars/avatar4.svg",
    name: "Carlos",
    imgUrl: "../../../assets/Imagescards/chess.svg",
    nameGame: "Aprende Ajedrez"
  },
  {
    mode: "friend",
    avatar: "../../../assets/AccountAvatars/avatar2.svg",
    name: "Ana"
  },
  {
    mode: "challengeAc",
    avatar: "../../../assets/AccountAvatars/avatar6.svg",
    name: "Carlos"
  },
  {
    mode: "news",
    imgUrl: "../../../assets/Imagescards/english.svg",
    nameGame: "Aprende Inglés",
    message: "Aprende inglés con nuestro nuevo juego"
  }
];

const Notifications = () => {
  const { userLogged } = useSelector(state => state.auth);
  const [isLogged] = useState(userLogged);

  return (
    <div className={style.notif_content}>
      {/* Logueado */}
      {
        isLogged &&
          data.map(({ mode, avatar, name, imgUrl, nameGame, message }, i) => (
            <NotificationCard
              key={i}
              mode={mode}
              avatar={avatar}
              name={name}
              imgUrl={imgUrl}
              message={message}
              nameGame={nameGame}
            />
          ))
        // <div>
        //   <div className={style.card1}>
        //     <h1>Desafío de amigo</h1>
        //     <div className={style.desk}>
        //       <img src={avatar} alt="" />
        //       <h2>Peter</h2>
        //       <div className={style.box}>
        //         <h3>¡Te desafío en</h3>
        //         <h3>
        //           <strong>Aprende Ajedréz!</strong>
        //         </h3>
        //         <img src={chess} alt="" />
        //       </div>
        //     </div>
        //     <button className={style.btn1}>Aceptar desafío</button>
        //     <button className={style.btn2}>Ignorar</button>
        //   </div>
        //   <div className={style.card2}>
        //     <div className={style.head}>
        //       <img src={logoM} alt="" />
        //       <h1>Novedades</h1>
        //       <i className="bi bi-x-circle-fill"></i>
        //     </div>
        //     <h4>Hemos Agregado un nuevo juego.</h4>
        //     <h4>¡No dejes de aprender y divertirte!</h4>
        //     <div className={style.desk}>
        //       <Card onlyShow={true} cover={english} name="Aprende inglés" stars={4} size="small" />
        //       <h4>Aprende inglés con nuestro nuevo juego</h4>
        //     </div>
        //     <button className={style.btn1}>Ir al juego</button>
        //   </div>
        // </div>
      }
      {/* No logueado */}
      {!isLogged && (
        <div className={style.not_logged}>
          <img src={noSigned} alt="" />
          <h3>Inicia sesión para ver las notificaciones</h3>
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Notifications;
