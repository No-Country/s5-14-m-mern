import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/auth/authAction";

import styles from "./signup.module.sass";
import "bootstrap-icons/font/bootstrap-icons.css";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Nombre de usuario minimo 5 caracteres")
    .max(20, "Nombre de usuario maximo 20 caracteres")
    .required("Nombre de usuario requerido"),
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string().min(6, "Contraseña minimo 6 caracteres").required("Contraseña requerida"),
  passwordConfirmacion: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmación requerida")
});

const SignUp = () => {
  const navigate = useNavigate();
  const { userLogged, successAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (successAuth) {
      navigate("/Login");
    }
    // redirect authenticated user to profile screen
    if (userLogged) {
      navigate("/home");
    }
  }, [userLogged, successAuth]);

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
      <img className={styles.img} src="../../../assets/logo/logo.png" />
      <p className={styles.description}>¡Crea tu cuenta y desafia a tus amigos!</p>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {
          dispatch(
            registerUser({
              username: values.username,
              email: values.email,
              password: values.password
            })
          );
          values.username = "";
          values.email = "";
          values.password = "";
          values.passwordConfirmacion = "";
        }}>
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field className={styles.formfield} name="username" placeholder="Nombre de usuario" />
            {errors.username && touched.username ? (
              <div className={styles.formerrors}>{errors.username}</div>
            ) : null}
            <Field className={styles.formfield} name="email" placeholder="E-mail" />
            {errors.email && touched.email ? (
              <div className={styles.formerrors}>{errors.email}</div>
            ) : null}
            <div className={styles.containerfield}>
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
            <div className={styles.containerfield}>
              <Field
                className={styles.formfieldcontraseña}
                name="passwordConfirmacion"
                placeholder="Confirmar Contraseña"
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

            {errors.passwordConfirmacion && touched.passwordConfirmacion ? (
              <div className={styles.formerrors}>{errors.passwordConfirmacion}</div>
            ) : null}
            <button className={styles.formbutton} type="submit">
              Crear Cuenta
            </button>
          </Form>
        )}
      </Formik>
      <Link className={styles.iniciarsesion} to={"../login"}>
        Tienes Cuenta? Inicia sesión
      </Link>
    </div>
  );
};

export default SignUp;
