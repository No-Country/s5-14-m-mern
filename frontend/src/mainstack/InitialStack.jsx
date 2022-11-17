import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home/Home.jsx";
import Games from "../screens/AllGames/AllGames.jsx";
import Favorites from "../screens/Favourites/Favourites.jsx";
import Account from "../screens/Account/Account.jsx";
import SingUp from "../screens/SingUp/SingUp.jsx";
import Login from "../screens/LogIn/LogIn.jsx";
import { PPTApp } from "../Games/piedraPapelTijeras/PPTApp.jsx";
import Notifications from "../screens/Notifications/Notifications.jsx";
import Messages from "../screens/Messages/Messages.jsx";
import Layout from "../screens/Layout/Layout.jsx";

function InitalStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
        <Route path="/games" element={<Games />} />
        <Route path="/account" element={<Account />} />
        <Route path="/test" element={<PPTApp />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
