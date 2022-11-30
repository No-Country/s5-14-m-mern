import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
// import { setLogin } from "../../redux/slices/login/loginSlice";
// import { useDispatch} from "react-redux";
// import { postLogin } from "../../redux/slices/login/loginAPI";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/slices/auth/authAction";
import { getUserLogged } from "../../redux/slices/user/userAction";

import styles from "../LogIn/login.module.sass";
import "bootstrap-icons/font/bootstrap-icons.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string().min(6, "Contraseña minimo 6 caracteres").required("Contraseña requerida")
});

const Login = () => {
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  // User from context
  const { userToken, userLogged, successAuth, errorAuth } = useSelector(state => state.auth); // leer los datos de la store
  const { userInfo } = useSelector(state => state.user); // leer los datos de la store

  const dispatch = useDispatch(); // llamar funcion para actualizar estado
  // Navigate handler
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Get where user came from

  useEffect(() => {
    if (userToken) {
      // Está logueado ?
      console.log("Está logueado");
      // Se cargó la información del usuario?
      if (userInfo) {
        console.log("Se cargó la información del usuario");
      } else {
        console.log("No se cargó la información del usuario");
        dispatch(getUserLogged(userLogged.id));
      }
    } else {
      console.log("No está logueado");
    }

    // if (successAuth && userToken) {
    //   console.log("obteniendo info de usuario", userLogged);
    //   dispatch(getUserLogged(userLogged.id));
    //   navigate("/");
    // } else if (userToken) {
    //   console.log("info de usuario existe", userInfo);
    //   if (!userInfo) {
    //     console.log("obteniendo info de usuario", userLogged);
    //     dispatch(getUserLogged(userLogged.id));
    //     console.log("origin", from);
    //     navigate(from, { replace: true });
    //   } else {
    //     console.log("tienes la info de usuario y esta cargada");
    //   }
    // } else if (errorAuth) {
    //   alert(`No se ha podido loguear. Error: ${errorAuth}`);
    // }
  }, [successAuth, userToken, errorAuth]);

  const submitHandler = values => {
    dispatch(userLogin({ email: values.email, password: values.password }));
    values.email = "";
    values.password = "";
  };

  return (
    <div className={styles.container}>
      <Link to={"../"}>
        <i
          className="bi bi-arrow-left"
          style={{
            color: "#fff",
            position: "absolute",
            top: "5%",
            left: "10%",
            fontSize: "25px",
            cursor: "pointer"
          }}></i>
      </Link>
      <img className={styles.imagen} src="../../../assets/logo/logo.png" />
      <p className={styles.description}>Inicia sesión para ingresar a tu cuenta</p>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={submitHandler}>
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field className={styles.formfield} name="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className={styles.formerrors}>{errors.email}</div>
            ) : null}
            <div className={styles.containercontraseña}>
              <Field
                className={styles.formfieldcontraseña}
                name="password"
                placeholder="Contraseña"
                type={!mostrarContraseña ? "password" : "text"}
              />
              <i
                onClick={() => setMostrarContraseña(!mostrarContraseña)}
                className="bi bi-eye-fill"
                style={{
                  position: "absolute",
                  marginTop: "12px",
                  right: "10%",
                  fontSize: "18px"
                }}></i>
            </div>
            {errors.password && touched.password ? (
              <div className={styles.formerrors}>{errors.password}</div>
            ) : null}
            <button className={styles.formbutton} type="submit">
              Enviar
            </button>
            <div id="noexiste"></div>
          </Form>
        )}
      </Formik>
      <Link className={styles.crearcuenta} to={"../signup"}>
        No tienes Cuenta? Registrate
      </Link>
    </div>
  );
};

export default Login;
