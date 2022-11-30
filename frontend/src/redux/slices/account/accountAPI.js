import Axios from "axios";

export const usernameUpdate = async (value, idUser) => {
  await Axios.put(`https://s5-14-mern-back-delta.vercel.app/api/users/${idUser}`, {
    username: value
  })
    .then(res => {
      console.log("Nombre de usuario Cambiado");
    })
    .catch(err => {
      console.log(err);
    });
};

export const avatarUpdate = async (value, idUser) => {
  await Axios.put(`https://s5-14-mern-back-delta.vercel.app/api/users/${idUser}`, {
    avatar: value
  })
    .then(res => {
      console.log("Avatar Cambiado");
    })
    .catch(err => {
      console.log(err);
    });
};

export const passwordUpdate = async (oldvalue, value, idUser) => {
  await Axios.put(`https://s5-14-mern-back-delta.vercel.app/api/users/${idUser}`, {
    oldPassword: oldvalue,
    newpassword: value
  })
    .then(res => {
      console.log("Avatar Cambiado");
    })
    .catch(err => {
      console.log(err);
    });
};
