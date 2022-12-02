import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "../Routing/RequireAuth.jsx";
import MessageUser from "../components/MessageComponents/MessangerUser/index.jsx";
import GameForm from "../components/PagesComponents/AdminPannel/GameForm/GameForm.jsx";
import GameList from "../components/PagesComponents/AdminPannel/GameList/GameList.jsx";
import {
  Home,
  Games,
  Account,
  SignUp,
  Login,
  AdminPannel,
  Notifications,
  Messages,
  Layout,
  Favourites
} from "../screens";

function InitalStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route element={<RequireAuth allowedRole="user" />}>
            <Route exact path="/account" element={<Account />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:userId" element={<MessageUser />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route element={<RequireAuth allowedRole="admin" />}>
            <Route path="/admin" element={<AdminPannel />}>
              <Route index element={<GameList />} />
              <Route path="game-manage" element={<GameForm />} />
              <Route path="game-manage/:id" element={<GameForm />} />
            </Route>
          </Route>
          <Route path="/games/:id" element={<Games />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
