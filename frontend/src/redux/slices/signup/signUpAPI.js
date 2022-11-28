import Axios from "axios";

export const postUser = async (user, navigate) => {
  await Axios.post(
    "https://s5-14-mern-back-delta.vercel.app/api/auth/signup",
    {
      username: user.username,
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
      console.log("Registro completado con exito");
      alert("Cuenta creada");
      navigate("../");
    })
    .catch(err => {
      console.log("cuenta no creada" + err);
      alert("No se pudo crear la cuenta");
    });
};
