import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../screens/Home/Home.jsx';
import Games from '../screens/Games/Games.jsx';
import Favorites from '../screens/Favourites/Favourites.jsx';
import Account from '../screens/Account/Account.jsx';


function InitalStack() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element= { <Home/> }  />
        <Route path='/games' element= { <Games/> }  />
        <Route path='/favourites' element= { <Favorites/> }  />
        <Route path='/account' element= { <Account/> }  />
      </Routes>
    </BrowserRouter>
  )
}

export default InitalStack;
