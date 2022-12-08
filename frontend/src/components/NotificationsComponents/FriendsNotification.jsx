import PropTypes from "prop-types";
import style from "./friendsNotification.module.sass";
import Avatar from "../PagesComponents/Avatar/Avatar";

const FriendsNotification = ({ data, accept, refuse }) => {
  return (
    <div className={style.card1}>
      <h1>{data.title}</h1>
      <div className={style.info}>
        <h2>
          <strong>{`${data.message.split("quiere")[0]}`}</strong>{" "}
          {`quiere ${data.message.split("quiere")[1]}`}
        </h2>

        <Avatar avatar={data.avatar} />
        <div className={style.buttons}>
          <button className={style.btn1} onClick={() => accept(data._id)}>
            Aceptar
          </button>
          <button className={style.btn2} onClick={() => refuse(data._id)}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

FriendsNotification.propTypes = {
  data: PropTypes.object,
  accept: PropTypes.func,
  refuse: PropTypes.func
};

export default FriendsNotification;
