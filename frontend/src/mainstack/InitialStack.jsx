import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home/Home.jsx";
import Games from "../screens/AllGames/AllGames.jsx";
import Favorites from "../screens/Favourites/Favourites.jsx";
import Account from "../screens/Account/Account.jsx";
import SignUp from "../screens/SignUp/SignUp.jsx";
import Login from "../screens/LogIn/LogIn.jsx";
import TriviaPage from "../Games/Trivia/index.jsx";
import { PPTApp } from "../Games/piedraPapelTijeras/PPTApp.jsx";
import Notifications from "../screens/Notifications/Notifications.jsx";
import Messages from "../screens/Messages/Messages.jsx";
import Layout from "../screens/Layout/Layout.jsx";
import AdivinaPalabra from "../Games/AdivinaPalabra/AdivinaPalabra.jsx";
import Rompecabezas from "../Games/Rompecabezas/Rompecabezas.jsx";
import MessageUser from "../components/MessageComponents/MessangerUser/index.jsx";
import ChatWraper from "../components/MessageComponents/ChatWraper/index.jsx";
// import { PPTApp } from "../Games/piedraPapelTijeras/PPTApp.jsx";

function InitalStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />

          <Route path="/games/*" element={<Games />}>
            <Route path="ppt" element={<PPTApp />} />
            <Route path="adivinapalabra" element={<AdivinaPalabra />} />
            <Route path="trivia" element={<TriviaPage />} />
            <Route path="puzzle" element={<Rompecabezas />} />
            {/* cargar juegos */}
          </Route>
        </Route>
        <Route path="/games" element={<Games />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/test" element={<AdivinaPalabra />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/chat" element={<ChatWraper />} />
        <Route path="/messages/options" element={<MessageUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
