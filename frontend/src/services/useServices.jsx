import axios from "axios";
import { getToken } from "./localStorage.jsx";

const useServices = () => {
  const BASE_URL = "http://localhost:8000";
  // const BASE_URL = "s5-14-mern-back-delta.vercel.app";

  const routeUrl = {
    auth: BASE_URL + "/api/auth",
    users: BASE_URL + "/api/users",
    games: BASE_URL + "/api/games",
    scores: BASE_URL + "/api/scores",
    images: BASE_URL + "/api/images",
    reviews: BASE_URL + "/api/reviews",
    friends: BASE_URL + "/api/friends",
    favourites: BASE_URL + "/api/favourites"
  };

  function api() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
      // withCredentials: true
    });
  }

  function apiProtected() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`
      },
      withCredentials: true
    });
  }

  // AUTH
  const auth = {
    signup: data => api().post(`${routeUrl.auth}/signup`, data),
    login: data => api().post(`${routeUrl.auth}/login`, data),
    changePassword: (id, data) => apiProtected().post(`${routeUrl.auth}/changePassword/${id}`, data)
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

    getById: (userId, abortController) =>
      api.get(
        `${routeUrl.users}/${userId}`,
        abortController ? { signal: abortController.signal } : null
      ),

    modify: (userId, data) => apiProtected.put(`${routeUrl.users}/${userId}`, data),

    remove: userId => apiProtected.delete(`${routeUrl.users}/${userId}`),

    privateData: (userId, abortController) =>
      apiProtected().get(
        `${routeUrl.users}/${userId}/private`,
        abortController ? { signal: abortController.signal } : null
      )
  };

  // GAMES
  const games = {
    getAll: abortController =>
      api().get(`${routeUrl.games}/`, abortController ? { signal: abortController.signal } : null),

    create: data => apiProtected.post(`${routeUrl.games}/`, data),

    getById: (gameId, abortController) =>
      api.get(
        `${routeUrl.games}/${gameId}`,
        abortController ? { signal: abortController.signal } : null
      ),

    modify: (gameId, data) => apiProtected.put(`${routeUrl.games}/${gameId}`, data),

    remove: gameId => apiProtected.delete(`${routeUrl.games}/${gameId}`)
  };

  // SCORES
  const scores = {
    getByGame: (gameId, abortController) =>
      api.get(
        `${routeUrl.scores}/${gameId}`,
        abortController ? { signal: abortController.signal } : null
      ),

    createInGame: (gameId, data) => api.post(`${routeUrl.scores}/${gameId}`, data)
  };

  // IMAGES
  const images = {
    getAllByGame: (gameId, abortController) =>
      api.get(
        `${routeUrl.images}/${gameId}`,
        abortController ? { signal: abortController.signal } : null
      ),
    getById: (imageId, abortController) =>
      api.get(
        `${routeUrl.images}/${imageId}`,
        abortController ? { signal: abortController.signal } : null
      ),
    add: (gameId, data) => apiProtected.post(`${routeUrl.images}/${gameId}`, data),
    remove: id => apiProtected.delete(`${routeUrl.images}/${id}`)
  };

  // REVIEWS
  // TODO: add, modify, remove

  // FRIENDS
  // TODO: add, remove

  // FAVOURITES
  // TODO: add, remove

  return {
    auth,
    users,
    games,
    scores,
    images
  };
};
export default useServices;
