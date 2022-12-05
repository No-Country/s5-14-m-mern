import style from "./notifications.module.sass";
// import avatar from "../../../assets/AccountAvatars/avatar4.png";
// import chess from "../../../assets/Imagescards/chess.svg";
// import english from "../../../assets/Imagescards/english.svg";
// import logoM from "../../../assets/Icons/logoHeaderM.svg";
// import Card from "../../components/PagesComponents/Card/Card";
import noSigned from "../../../assets/Icons/noSignNotif.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useServices from "../../services/useServices";
import FriendsNotification from "../../components/NotificationsComponents/FriendsNotification";
import { getUserLogged } from "../../redux/slices/user/userAction";

const Notifications = () => {
  const dispatch = useDispatch();
  const [myNotifications, setMyNotifications] = useState();

  const { userLogged } = useSelector(state => state.auth);
  const { notifications, friends } = useServices();

  useEffect(() => {
    if (userLogged) {
      (async () => {
        const { data } = await notifications.getNotifications();
        setMyNotifications(data.notifications);
      })();
    }
  }, []);

  const acceptInvitation = async notificationId => {
    const { data } = await friends.getFriendRequest(notificationId);
    await friends.acceptInvitation(data.emmiterId);
    const newNotifications = await notifications.deleteNotification(notificationId);
    setMyNotifications(newNotifications.data);
    dispatch(getUserLogged(userLogged.id));
  };

  const refuseInvitation = async notificationId => {
    const { data } = await friends.getFriendRequest(notificationId);
    await friends.refuseInvitation(data.emmiterId);
    const newNotifications = await notifications.deleteNotification(notificationId);
    setMyNotifications(newNotifications.data);
  };

  return (
    <div className={style.notif_content}>
      {/* Logueado */}
      {userLogged ? (
        myNotifications ? (
          myNotifications.map(not => (
            <FriendsNotification
              key={not._id}
              data={not}
              accept={acceptInvitation}
              refuse={refuseInvitation}
            />
          ))
        ) : (
          <p>Sin notificaciones</p>
        )
      ) : (
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

{
  /* <div>
          <div className={style.card1}>
            <h1>Desafío de amigo</h1>
            <div className={style.desk}>
              <img src={avatar} alt="" />
              <h2>Peter</h2>
              <div className={style.box}>
                <h3>¡Te desafío en</h3>
                <h3>
                  <strong>Aprende Ajedréz!</strong>
                </h3>
                <img src={chess} alt="" />
              </div>
            </div>
            <button className={style.btn1}>Aceptar desafío</button>
            <button className={style.btn2}>Ignorar</button>
          </div>
          <div className={style.card2}>
            <div className={style.head}>
              <img src={logoM} alt="" />
              <h1>Novedades</h1>
              <i className="bi bi-x-circle-fill"></i>
            </div>
            <h4>Hemos Agregado un nuevo juego.</h4>
            <h4>¡No dejes de aprender y divertirte!</h4>
            <div className={style.desk}>
              <Card cover={english} name="Aprende inglés" stars={4} size="small" />
              <h4>Aprende inglés con nuestro nuevo juego</h4>
            </div>
            <button className={style.btn1}>Ir al juego</button>
          </div>
        </div> */
}
