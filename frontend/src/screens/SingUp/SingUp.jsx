import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";

const SingupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Nombre de usuario minimo 5 caracteres")
    .max(20, "Nombre de usuario maximo 20 caracteres")
    .required("Nombre de usuario requerido"),
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string()
    .min(6, "Contraseña minimo 6 caracteres")
    .matches(/[a-zA-Z]/, "Contraseña solo acepta letras")
    .required("Contraseña requerida")
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
  return (
    <div>
      <h1>Registrarse</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: ""
        }}
        validationSchema={SingupSchema}
        onSubmit={values => {
          enviarDatos(values);
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form>
            <Field name="username" placeholder="Nombre de usuario" />
            {errors.username && touched.username ? <div>{errors.username}</div> : null}
            <Field name="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="Contraseña" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit">Crear Cuenta</button>
          </Form>
        )}
      </Formik>
      <Link to={"../login"}>Tienes Cuenta? Registrate</Link>
    </div>
  );
};

export default SingUp;
