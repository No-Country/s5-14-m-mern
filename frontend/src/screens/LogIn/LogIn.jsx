import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email requerido"),
  password: Yup.string()
    .min(6, "Contraseña minimo 6 caracteres")
    .matches(/[a-zA-Z]/, "Contraseña solo acepta letras")
    .required("Contraseña requerida")
});

async function pedirDatos(values) {
  await Axios.post("https://http://127.0.0.1:5173/api/auth/singup", {
    email: values.email,
    password: values.password
  });
}

const Login = () => {
  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          pedirDatos(values);
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form>
            <Field name="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="Contraseña" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
      <Link to={"../singup"}>No tienes Cuenta? Registrate</Link>
    </div>
  );
};

export default Login;
