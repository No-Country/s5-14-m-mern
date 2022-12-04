import PropTypes from "prop-types";
import style from "./friendsNotification.module.sass";
import avatarI from "../../../assets/AccountAvatars/avatar0.png";

const FriendNotification = ({ data }) => {
  return (
    <div className={style.card1}>
      <h1>{data.title}</h1>
      <h2>{data.message}</h2>
      <div className={style.desk}>
        <img src={data.avatar || avatarI} alt="" />
      </div>
      <button className={style.btn1}>Aceptar</button>
      <button className={style.btn2}>Rechazar</button>
    </div>
  );
};

FriendNotification.propTypes = {
  data: PropTypes.object
};

export default FriendNotification;
