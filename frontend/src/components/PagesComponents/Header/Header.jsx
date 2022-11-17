import React from 'react'
import './header.sass'
import logo from '../../../../assets/Icons/logoHeader.svg'
import search from '../../../../assets/Icons/search.svg'
import user from '../../../../assets/Icons/usersquare.svg'
import menu from '../../../../assets/Icons/more.svg'

const Header = () => {
  return (
    <div className='header-content'>
        <img className='mob' src={menu}/>
        <img className='logoH' src={logo}/>
        <input type='text' placeholder='Ej Matemáticas, Memoria...'/>        
        <img className='mob' src={search}/>
        <img className='mob' src={user}/>        
        <button>Iniciar sesión</button>
    </div>
  )
}

export default Header