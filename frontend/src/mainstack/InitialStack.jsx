import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "../Routing/RequireAuth.jsx";
import Home from "../screens/Home/Home.jsx";
import Games from "../screens/AllGames/AllGames.jsx";
import Account from "../screens/Account/Account.jsx";
import SignUp from "../screens/SignUp/SignUp.jsx";
import Login from "../screens/LogIn/LogIn.jsx";
import AdminPannel from "../screens/AdminPanel/AdminPannel.jsx";
import Notifications from "../screens/Notifications/Notifications.jsx";
import Messages from "../screens/Messages/Messages.jsx";
import Layout from "../screens/Layout/Layout.jsx";
import Favourites from "../screens/Favourites/Favourites.jsx";

import TriviaPage from "../Games/Trivia/index.jsx";
import { PPTApp } from "../Games/piedraPapelTijeras/PPTApp.jsx";
import AdivinaPalabra from "../Games/AdivinaPalabra/AdivinaPalabra.jsx";
import Rompecabezas from "../Games/Rompecabezas/Rompecabezas.jsx";
import LightGame from "../Games/juegoLuces/LightGame.jsx";

import MessageUser from "../components/MessageComponents/MessangerUser/index.jsx";
import GameForm from "../components/PagesComponents/AdminPannel/GameForm/GameForm.jsx";
import GameList from "../components/PagesComponents/AdminPannel/GameList/GameList.jsx";

function InitalStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes element={<Layout />}>
          <Route exact path="/" element={<Home />} />

          <Routes element={<RequireAuth allowedRole="user" />}>
            <Route exact path="/account" element={<Account />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:userId" element={<MessageUser />} />
            <Route path="/account" element={<Account />} />
          </Routes>

          <Routes element={<RequireAuth allowedRole="user" />}>
            <Route path="/admin" element={<AdminPannel />}>
              <Route index element={<GameList />} />
              <Route path="game-manage" element={<GameForm />} />
              <Route path="game-manage/:id" element={<GameForm />} />
            </Route>
          </Routes>

          <Route path="/games" element={<Games />}>
            <Route path="ppt" element={<PPTApp />} />
            <Route path="adivinapalabra" element={<AdivinaPalabra />} />
            <Route path="trivia" element={<TriviaPage />} />
            <Route path="puzzle" element={<Rompecabezas />} />
            <Route path="juegoLuces" element={<LightGame />} />
            {/* cargar juegos */}
          </Route>
        </Routes>

        <Route path="/test" element={<AdivinaPalabra />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
