import { useEffect, useState, useRef } from "react";
import style from "./account.module.sass";
import { useSelector, useDispatch } from "react-redux";
import userServices from "../../services/useServices.jsx";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import edit from "../../../assets/Icons/edit2.svg";
import avatarDef from "../../../assets/AccountAvatars/avatar0.svg";
import { getUserLogged } from "../../redux/slices/user/userAction";
import arrowD from "../../../assets/Icons/arrowMenuD.svg";
import arrowU from "../../../assets/Icons/arrowMenuU.svg";

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
  const inputRef = useRef();
  const { userLogged } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [estado, setEstado] = useState(
    JSON.parse(localStorage.getItem("EstadoPorDefecto")) || "Disponible"
  );
  const [stateMenu, setStateMenu] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [onEdit, setOnEdit] = useState(false);

  const disp = () => {
    setEstado("Disponible");
    handleMenu();
  };
  const aus = () => {
    setEstado("Ausente");
    handleMenu();
  };
  const noM = () => {
    setEstado("No Molestar");
    handleMenu();
  };
  const handleMenu = () => setStateMenu(!stateMenu);
  const handleAvatar = ava => setAvatar(ava);

  const handleChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    if (onEdit) {
      setOnEdit(false);
    } else {
      setOnEdit(true);
      inputRef.current.select();
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // guardar en el localstorage el estado disponible o no
    localStorage.setItem("EstadoPorDefecto", JSON.stringify(estado));
    try {
      const result = await users.modify(userInfo.id, { avatar, username });
      console.log(result);
      dispatch(getUserLogged(userLogged.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setAvatar(userInfo.avatar);
    setUsername(userInfo.username);
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className={style.container}>
      {userInfo ? (
        <form onSubmit={handleSubmit}>
          <div className={style.account}>
            <img className={style.mainAvatar} src={avatar || avatarDef} alt="" />
            <div className={style.user}>
              <input
                className={style.input}
                ref={inputRef}
                type="text"
                name="name"
                value={username}
                onChange={handleChange}
                readOnly={!onEdit}
              />
              <button className={style.btn_edit} onClick={handleEdit}>
                <img src={edit} alt="" />
              </button>
            </div>
            <div className={style.state}>
              {estado === "Disponible" && <div className={style.disp}></div>}
              {estado === "Ausente" && <div className={style.aus}></div>}
              {estado === "No Molestar" && <div className={style.noM}></div>}
              <p>{estado}</p>
              {!stateMenu && <img onClick={handleMenu} src={arrowD} />}
              {stateMenu && <img onClick={handleMenu} src={arrowU} />}
              {stateMenu && (
                // SELECTOR + OPTIONS
                <div className={style.menu}>
                  <div onClick={disp} className={style.flex}>
                    <div className={style.disp}></div>
                    <p>Disponinle</p>
                  </div>
                  <div onClick={aus} className={style.flex}>
                    <div className={style.aus}></div>
                    <p>Ausente</p>
                  </div>
                  <div onClick={noM} className={style.flex}>
                    <div className={style.noM}></div>
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
      ) : (
        <SpinnerLoad className={style.spinner} />
      )}
    </div>
  );
};

export default Account;
