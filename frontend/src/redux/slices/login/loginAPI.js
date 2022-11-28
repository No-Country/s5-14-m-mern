import Axios from "axios";

export const postLogin = async (user, navigate) => {
  await Axios.post(
    "https://s5-14-mern-back-delta.vercel.app/api/auth/register",
    {
      email: user.email,
      password: user.password
    },
    {
      headers: {
        "Content-Type": "application/json",
        AllowCredentials: true
      }
    }
  )
    .then(res => {
      console.log("Inicio de sesion completado con exito");
      alert("Cuenta iniciada");
      navigate("../");
    })
    .catch(err => {
      console.log("cuenta no iniciada" + err);
      alert("No se pudo iniciar la cuenta");
    });
};
