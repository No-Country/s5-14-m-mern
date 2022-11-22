import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../LogIn/login.sass";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string().min(6, "Contraseña minimo 6 caracteres").required("Contraseña requerida")
});

// eslint-disable-next-line no-unused-vars
async function pedirDatos(values) {
  await Axios.post("https://http://127.0.0.1:5173/api/auth/singup", {
    email: values.email,
    password: values.password
  })
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.log(err);
    });
}

const Login = () => {
  const navigate = useNavigate();
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const cuenta = {
    email: "admin123@gmail.com",
    password: "123456"
  };

  return (
    <div className="login-container">
      <Link className="volver-home" to={"../"}>
        <i className="bi bi-arrow-left volver-home"></i>
      </Link>
      <img src="../../../assets/logo/logo.png" />
      <p className="login-container-description">Inicia sesión para ingresar a tu cuenta</p>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          if (values.email === cuenta.email && values.password === cuenta.password) {
            navigate("../");
          } else {
            alert("Usuario no existe");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-container-form">
            <Field className="login-container-form-field" name="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className="login-container-form-errors">{errors.email}</div>
            ) : null}
            <div>
              <Field
                className="login-container-form-field"
                name="password"
                placeholder="Contraseña"
                type={!mostrarContraseña ? "password" : "text"}
              />
              <i
                onClick={() => setMostrarContraseña(!mostrarContraseña)}
                className="bi bi-eye-fill mostrar-contraseña"
              ></i>
            </div>
            {errors.password && touched.password ? (
              <div className="login-container-form-errors">{errors.password}</div>
            ) : null}
            <button className="login-container-form-button" type="submit">
              Enviar
            </button>
            <div id="noexiste"></div>
          </Form>
        )}
      </Formik>
      <Link className="login-boton-crear-cuenta" to={"../signup"}>
        No tienes Cuenta? Registrate
      </Link>
    </div>
  );
};

export default Login;
