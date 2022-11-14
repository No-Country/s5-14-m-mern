import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home/Home.jsx";
import Games from "../screens/AllGames/AllGames.jsx";
import Favorites from "../screens/Favourites/Favourites.jsx";
import Account from "../screens/Account/Account.jsx";
import SingUp from "../screens/SingUp/SingUp.jsx";
import Login from "../screens/LogIn/LogIn.jsx";

function InitalStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/test" element={<SingUp />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
