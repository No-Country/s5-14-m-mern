import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";

import "../SingUp/singup.sass";

const SingupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Nombre de usuario minimo 5 caracteres")
    .max(20, "Nombre de usuario maximo 20 caracteres")
    .required("Nombre de usuario requerido"),
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string().min(6, "Contraseña minimo 6 caracteres").required("Contraseña requerida")
});

async function enviarDatos(values) {
  await Axios.post("https://http://127.0.0.1:5173/api/auth/singup", {
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

const SingUp = () => {
  const navigate = useNavigate();
  return (
    <div className="singup-container">
      <h1 className="singup-container-title">Registrarse</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: ""
        }}
        validationSchema={SingupSchema}
        onSubmit={values => {
          enviarDatos(values);
          navigate("../");
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form className="sing-up-container-form">
            <Field
              className="sing-up-container-form-field"
              name="username"
              placeholder="Nombre de usuario"
            />
            {errors.username && touched.username ? (
              <div className="sing-up-container-form-errors">{errors.username}</div>
            ) : null}
            <Field className="sing-up-container-form-field" name="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div className="sing-up-container-form-errors">{errors.email}</div>
            ) : null}
            <Field
              className="sing-up-container-form-field"
              name="password"
              placeholder="Contraseña"
            />
            {errors.password && touched.password ? (
              <div className="sing-up-container-form-errors">{errors.password}</div>
            ) : null}
            <button className="sing-up-container-form-button" type="submit">
              Crear Cuenta
            </button>
          </Form>
        )}
      </Formik>
      <Link className="singup-boton-iniciar-sesion" to={"../login"}>
        Tienes Cuenta? Inicia Sesión
      </Link>
    </div>
  );
};

export default SingUp;
