import io from "socket.io-client";
import { getToken } from "./localStorage";
// production:  const socket = io(process.env.VITE_API_URL);
// DEV

const token = getToken();
const socket = io(import.meta.env.VITE_API_URL, {
  query: { token },
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log(`you are connected with id: ${socket.id}`);
});

export default socket;
