export const getToken = () => {
  const local = JSON.parse(localStorage.getItem("userToken"));
  const userToken = local && local.auth ? local.auth : null;
  return userToken;
};
export const getUserLogged = () => {
  const local = JSON.parse(localStorage.getItem("userToken"));
  const userLogged =
    local && local.user?.id && local.user?.role
      ? { id: local.user.id, role: local.user.role }
      : false;
  return userLogged;
};
export const addLocal = data => {
  const local = localStorage.setItem("userToken", JSON.stringify(data));
  return local;
};
export const removeLocal = () => {
  localStorage.removeItem("userToken");
  return false;
};
