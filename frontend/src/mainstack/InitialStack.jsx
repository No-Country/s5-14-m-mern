import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home/Home.jsx";
import Games from "../screens/AllGames/AllGames.jsx";
import Favorites from "../screens/Favourites/Favourites.jsx";
import Account from "../screens/Account/Account.jsx";
import SignUp from "../screens/SignUp/SignUp.jsx";
import Login from "../screens/LogIn/LogIn.jsx";
import AdivinaPalabra from "../Games/AdivinaPalabra/AdivinaPalabra.jsx";

function InitalStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/test" element={<AdivinaPalabra />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
