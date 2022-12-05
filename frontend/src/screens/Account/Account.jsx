import { useState } from "react";
import style from "./account.module.sass";
import { useSelector } from "react-redux";
import userServices from "../../services/useServices.jsx";

const avatars = [
  "../../../assets/AccountAvatars/avatar0.svg",
  "../../../assets/AccountAvatars/avatar1.svg",
  "../../../assets/AccountAvatars/avatar2.svg",
  "../../../assets/AccountAvatars/avatar3.svg",
  "../../../assets/AccountAvatars/avatar4.svg",
  "../../../assets/AccountAvatars/avatar5.svg",
  "../../../assets/AccountAvatars/avatar6.svg",
  "../../../assets/AccountAvatars/avatar7.svg",
  "../../../assets/AccountAvatars/avatar8.svg"
];

const Account = () => {
  const { users } = userServices();
  const { userInfo } = useSelector(state => state.user);

  const [estado, setEstado] = useState(
    JSON.parse(localStorage.getItem("EstadoPorDefecto")) || "Disponible"
  );
  const [stateMenu, setStateMenu] = useState(false);
  const [avatar, setAvatar] = useState(userInfo.avatar);
  const [username, setUsername] = useState(userInfo.userName);
  const [onEdit, setOnEdit] = useState(false);

  const disp = () => setEstado("Disponible");
  const aus = () => setEstado("Ausente");
  const noM = () => setEstado("No Molestar");
  const handleMenu = () => setStateMenu(!stateMenu);
  const handleAvatar = ava => setAvatar(ava);

  const handleChange = e => {
    setUsername(e.target.name);
  };
  const handleEdit = e => {
    e.preventDefault();
    if (onEdit) {
      setOnEdit(false);
    } else {
      setOnEdit(true);
    }
    console.log(onEdit);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // guardar en el localstorage el estado disponible o no
    localStorage.setItem("EstadoPorDefecto", JSON.stringify(estado));
    try {
      const result = await users.modify(userInfo._id, { avatar, username });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.account}>
          <img className={style.mainAvatar} src={avatar} alt="" />
          <div className={style.user}>
            <input
              type="text"
              name="name"
              value={username}
              onChange={handleChange}
              readOnly={!onEdit}
            />
            <h3>{username}</h3>
            <button onClick={handleEdit}>
              <i className="bi bi-pencil"></i>
            </button>
          </div>
          <div className={style.state}>
            {estado === "Disponible" && <img className={style.disp} />}
            {estado === "Ausente" && <img className={style.aus} />}
            {estado === "No Molestar" && <img className={style.noM} />}
            <p>{estado}</p>
            {!stateMenu && <i onClick={handleMenu} className="bi bi-caret-down-fill"></i>}
            {stateMenu && <i onClick={handleMenu} className="bi bi-caret-up-fill"></i>}
            {stateMenu && (
              // SELECTOR + OPTIONS
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
          <button className={style.btn} type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
