import { useState } from "react";
import style from "./account.module.sass";

const avatars = [
  "../../../assets/AccountAvatars/avatar0.png",
  "../../../assets/AccountAvatars/avatar1.png",
  "../../../assets/AccountAvatars/avatar2.png",
  "../../../assets/AccountAvatars/avatar3.png",
  "../../../assets/AccountAvatars/avatar4.png",
  "../../../assets/AccountAvatars/avatar5.png",
  "../../../assets/AccountAvatars/avatar6.png",
  "../../../assets/AccountAvatars/avatar7.png",
  "../../../assets/AccountAvatars/avatar8.png"
];

const user = {
  name: "Carlos",
  avatarSrc: "../../../assets/AccountAvatars/avatarElegido.png",
  state: "Disponible"
};

const Account = () => {
  const [estado, setEstado] = useState("Disponible");
  const [stateMenu, setStateMenu] = useState(false);
  const [avatar, setAvatar] = useState(user.avatarSrc);

  const disp = () => setEstado("Disponible");
  const aus = () => setEstado("Ausente");
  const noM = () => setEstado("No Molestar");
  const handleMenu = () => setStateMenu(!stateMenu);
  const handleAvatar = ava => setAvatar(ava);

  return (
    <div className={style.container}>
      <div className={style.account}>
        <img className={style.mainAvatar} src={avatar} alt="" />
        <div className={style.user}>
          <h3>{user.name}</h3>
          <i className="bi bi-pencil"></i>
        </div>
        <div className={style.state}>
          {estado === "Disponible" && <img className={style.disp} />}
          {estado === "Ausente" && <img className={style.aus} />}
          {estado === "No Molestar" && <img className={style.noM} />}
          <p>{estado}</p>
          {!stateMenu && <i onClick={handleMenu} className="bi bi-caret-down-fill"></i>}
          {stateMenu && <i onClick={handleMenu} className="bi bi-caret-up-fill"></i>}
          {stateMenu && (
            <div className={style.menu}>
              <div onClick={disp} className={style.flex}>
                <img className={style.disp} />
                <p>Disponinle</p>
              </div>
              <div onClick={aus} className={style.flex}>
                <img className={style.aus} />
                <p>Ausente</p>
              </div>
              <div onClick={noM} className={style.flex}>
                <img className={style.noM} />
                <p>No Molestar</p>
              </div>
            </div>
          )}
        </div>
        <div className={style.avatars}>
          {avatars.map((ava, i) => (
            <img key={i} src={ava} onClick={() => handleAvatar(ava)} />
          ))}
        </div>
        <button className={style.btn}>Cambiar contraseña</button>
        <button className={style.btn}>Guardar</button>
      </div>
    </div>
  );
};

export default Account;
