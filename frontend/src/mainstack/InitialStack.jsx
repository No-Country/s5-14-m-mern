import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "../Routing/RequireAuth.jsx";
import MessageUser from "../components/MessageComponents/MessangerUser/index.jsx";
import ChatWraper from "../components/MessageComponents/ChatWraper/index.jsx";
import DefaultMessages from "../components/MessageComponents/DefaultMessages/index.jsx";
import ChallengeMessage from "../components/MessageComponents/ChallengeMessage/index.jsx";
import PageNotFound from "../screens/NotFound/PageNotFound.jsx";
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
        {/* LAYOUT ROUTES */}
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/games/:id" element={<Games />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/*" element={<PageNotFound />} />
          {/* PROTECTED ROUTES */}
          <Route element={<RequireAuth allowedRole="user" />}>
            <Route exact path="/account" element={<Account />} />
            <Route path="/messages/:userId" element={<MessageUser />} />
            <Route path="/messages/chat" element={<ChatWraper />} />
            <Route path="/messages/defaultMessages" element={<DefaultMessages />} />
            <Route path="/messages/challenge" element={<ChallengeMessage />} />
          </Route>
          {/* PROTECTED ROUTES ONLY ADMIN */}
          <Route element={<RequireAuth allowedRole="admin" />}>
            <Route path="/admin" element={<AdminPannel />}>
              <Route index element={<GameList />} />
              <Route path="game-manage" element={<GameForm />} />
              <Route path="game-manage/:id" element={<GameForm />} />
            </Route>
          </Route>
        </Route>
        {/* ROUTES WITHOUT LAYOUT */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default InitalStack;
