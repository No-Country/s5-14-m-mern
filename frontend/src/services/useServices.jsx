import axios from "axios";

const useServices = () => {
  // const BASE_URL = "http://localhost:8000";
  const BASE_URL = "s5-14-mern-back-delta.vercel.app";
  const routeUrl = {
    auth: BASE_URL + "/api/auth",
    users: BASE_URL + "/api/users",
    games: BASE_URL + "/api/games",
    scores: BASE_URL + "/api/scores",
    images: BASE_URL + "/api/images"
  };

  const api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  });

  // AUTH
  const auth = {
    signup: data => api.post(`${routeUrl.auth}/signup`, data),
    login: abortController =>
      api.get(
        `${routeUrl.auth}/login`,
        abortController ? { signal: abortController.signal } : null
      ),
    changePassword: (data, id) => api.post(`${routeUrl.auth}/changePassword/${id}`, data)
  };

  // USERS

  const users = {
    getAll: abortController =>
      api.get(`${routeUrl.users}/`, abortController ? { signal: abortController.signal } : null),
    getAdmins: abortController =>
      api.get(
        `${routeUrl.users}/admin`,
        abortController ? { signal: abortController.signal } : null
      ),
    getById: (abortController, id) =>
      api.get(
        `${routeUrl.users}/${id}`,
        abortController ? { signal: abortController.signal } : null
      ),
    modify: (id, data) => api.put(`${routeUrl.users}/${id}`, data),
    delete: id => api.delete(`${routeUrl.users}/${id}`),
    privateData: (abortController, id) =>
      api.get(
        `${routeUrl.users}/${id}/private`,
        abortController ? { signal: abortController.signal } : null
      )
  };

  // GAMES
  const games = {
    getAll: abortController =>
      api.get(`${routeUrl.games}/`, abortController ? { signal: abortController.signal } : null),
    create: data => api.post(`${routeUrl.games}/`, data),
    getById: (abortController, id) =>
      api.get(
        `${routeUrl.games}/${id}`,
        abortController ? { signal: abortController.signal } : null
      ),
    modify: (data, id) => api.put(`${routeUrl.games}/${id}`, data),
    delete: id => api.delete(`${routeUrl.games}/${id}`)
  };

  // SCORES
  const scores = {
    getByGame: (abortController, gameId) =>
      api.get(
        `${routeUrl.scores}/${gameId}`,
        abortController ? { signal: abortController.signal } : null
      ),
    createInGame: (data, gameId) => api.post(`${routeUrl.scores}/${gameId}`, data)
  };

  // IMAGES
  const images = {
    getAllByGame: (abortController, gameId) =>
      api.get(
        `${routeUrl.images}/${gameId}`,
        abortController ? { signal: abortController.signal } : null
      ),
    getById: (abortController, id) =>
      api.get(
        `${routeUrl.images}/${id}`,
        abortController ? { signal: abortController.signal } : null
      ),
    add: (data, gameId) => api.post(`${routeUrl.images}/${gameId}`, data),
    delete: id => api.delete(`${routeUrl.images}/${id}`)
  };

  return {
    auth,
    users,
    games,
    scores,
    images
  };
};
export default useServices;
