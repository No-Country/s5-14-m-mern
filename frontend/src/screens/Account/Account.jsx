import { useEffect, useState, useRef } from "react";
import style from "./account.module.sass";
import { useSelector, useDispatch } from "react-redux";
import userServices from "../../services/useServices.jsx";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import edit from "../../../assets/Icons/edit2.svg";
import eye from "../../../assets/Icons/pass.svg";
import avatarDef from "../../../assets/AccountAvatars/avatar0.svg";
import { getUserLogged } from "../../redux/slices/user/userAction";
import arrowD from "../../../assets/Icons/arrowMenuD.svg";
import arrowU from "../../../assets/Icons/arrowMenuU.svg";
import { ToastContainer, toast } from "react-toastify";

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
  const { users, auth } = userServices();
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
  const [editPass, setEditPass] = useState(false);
  const [actualPass, setActualPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const [seePassAc, setSeePassAc] = useState(false);
  const [seePass1, setSeePass1] = useState(false);
  const [seePass2, setSeePass2] = useState(false);
  const [errorLength, setErrorLength] = useState(false);
  const [error2, setError2] = useState(false);

  const buttonRef = useRef();

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
  const handlePassword = () => setEditPass(!editPass);

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
  const handleSubmitPassword = async e => {
    e.preventDefault();
    if (pass1.length > 4) {
      setErrorLength(false);
      if (pass1 === pass2) {
        setError2(false);
        try {
          buttonRef.current.disabled = true;
          const result = await auth.changePassword(userInfo.id, { password: pass1 });
          console.log(result);
          buttonRef.current.disabled = false;
          toast.success("Cambio de contraseña exitoso", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          });
        } catch (err) {
          buttonRef.current.disabled = false;
          console.log(err);
        }
      } else setError2(true);
    } else setErrorLength(true);
  };

  useEffect(() => {
    setAvatar(userInfo.avatar);
    setUsername(userInfo.username);
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className={style.container}>
      {userInfo ? (
        !editPass ? (
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
              <button className={style.btn} onClick={handlePassword}>
                Cambiar contraseña
              </button>
              <button className={style.btn} type="submit">
                Guardar
              </button>
            </div>
          </form>
        ) : (
          <>
            <form className={style.form_pass} onSubmit={handleSubmitPassword}>
              <img className={style.mainAvatar} src={avatar || avatarDef} alt="" />
              <h3>{username}</h3>
              <div className={style.container_form}>
                <div className={style.input_eye}>
                  <input
                    name="actual"
                    value={actualPass}
                    type={seePassAc ? "text" : "password"}
                    className={style.formfield}
                    placeholder="Contraseña actual"
                    onChange={e => setActualPass(e.target.value)}
                  />
                  <img
                    onClick={e => setSeePassAc(!seePassAc)}
                    className={style.show_pass}
                    src={eye}
                  />
                </div>
                <div className={style.input_eye}>
                  <input
                    name="pass_1"
                    value={pass1}
                    type={seePass1 ? "text" : "password"}
                    className={style.formfield}
                    placeholder="Nueva contraseña"
                    onChange={e => setPass1(e.target.value)}
                  />
                  <img
                    onClick={e => setSeePass1(!seePass1)}
                    className={style.show_pass}
                    src={eye}
                  />
                </div>
                {errorLength ? (
                  <p className={style.formerrors}>La contraseña debe tener mas de 4 caracteres</p>
                ) : null}
                <div className={style.input_eye}>
                  <input
                    name="pass_2"
                    value={pass2}
                    type={seePass2 ? "text" : "password"}
                    className={style.formfield}
                    placeholder="Repetir contraseña"
                    onChange={e => setPass2(e.target.value)}
                  />
                  <img
                    onClick={e => setSeePass2(!seePass2)}
                    className={style.show_pass}
                    src={eye}
                  />
                </div>
                {error2 ? (
                  <p className={style.formerrors}>Las contraseñas deben ser iguales</p>
                ) : null}
              </div>
              <div>
                <button className={style.btn} onClick={handlePassword}>
                  Volver
                </button>
                <button ref={buttonRef} className={style.btn} type="submit">
                  Guardar
                </button>
              </div>
            </form>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        )
      ) : (
        <SpinnerLoad className={style.spinner} />
      )}
    </div>
  );
};

export default Account;
