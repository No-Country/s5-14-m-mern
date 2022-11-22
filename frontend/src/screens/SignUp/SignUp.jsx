import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./signup.sass";

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

async function enviarDatos(values) {
  await Axios.post("https://s5-14-mern-back-delta.vercel.app/api/auth/signup", {
    username: values.username,
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

const SignUp = () => {
  const navigate = useNavigate();
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  return (
    <div className="signup-container">
      <Link className="volver-home" to={"../"}>
        <i className="bi bi-arrow-left volver-home"></i>
      </Link>
      <img src="../../../assets/logo/logo.png" />
      <p className="signup-container-description">¡Crea tu cuenta y desafia a tus amigos!</p>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          enviarDatos(values);
          navigate("../");
        }}
      >
        {({ errors, touched }) => (
          <Form className="signup-container-form">
            <Field
              className="signup-container-form-field"
              name="username"
              placeholder="Nombre de usuario"
            />
            {errors.username && touched.username ? (
              <div className="signup-container-form-errors">{errors.username}</div>
            ) : null}
            <Field className="signup-container-form-field" name="email" placeholder="E-mail" />
            {errors.email && touched.email ? (
              <div className="signup-container-form-errors">{errors.email}</div>
            ) : null}
            <div>
              <Field
                className="signup-container-form-field"
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
              <div className="signup-container-form-errors">{errors.password}</div>
            ) : null}
            <div>
              <Field
                className="signup-container-form-field"
                name="passwordConfirmacion"
                placeholder="Confirmar Contraseña"
                type={!mostrarContraseña ? "password" : "text"}
              />
              <i
                onClick={() => setMostrarContraseña(!mostrarContraseña)}
                className="bi bi-eye-fill mostrar-contraseña"
              ></i>
            </div>

            {errors.passwordConfirmacion && touched.passwordConfirmacion ? (
              <div className="signup-container-form-errors">{errors.passwordConfirmacion}</div>
            ) : null}
            <button className="signup-container-form-button" type="submit">
              Crear Cuenta
            </button>
          </Form>
        )}
      </Formik>
      <Link className="signup-boton-iniciar-sesion" to={"../login"}>
        Tienes Cuenta? Inicia sesión
      </Link>
    </div>
  );
};

export default SignUp;
