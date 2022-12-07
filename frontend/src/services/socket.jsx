import io from "socket.io-client";
import { getToken } from "./localStorage";
// production:  const socket = io(process.env.VITE_API_URL);
// DEV

const BASE_URL = import.meta.env.VITE_API_URL;
const token = getToken();
const socket = io("https://ludens-two.vercel.app", {
  query: { token },
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log(`you are connected with id: ${socket.id}`);
});

export default socket;
