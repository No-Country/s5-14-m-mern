import React from 'react'
import './footer.sass'
import logo from '../../../../assets/Icons/logoFooter.svg'

export const Footer = () => {
  return (
    <div className='footer-content'>
      <div className='footer'>
        <img className='logoF' src={logo} />
        <ul>
          <li> Términos y condiciones</li>
          <li> Política de privacidad</li>
          <li> Política de cookies</li>
          <li> Notificaciones de Copyright</li>
          <li> Configuración de cookies</li>
        </ul>
        <div>
          <h3>Ayuda</h3>
          <p>Preguntas frecuentes</p>
          <p>Soporte</p>
          <p>Licencia</p>
        </div>
        <div>
          <h3>Sobre nosotros</h3>
          <p>Equipo</p>
          <p>Redes sociales</p>
          <p>Novedades</p>
          <p>Blog</p>
        </div>
      </div>
    <p className='copyR'>Copyright Ludens@ 2022. All rights reserved.</p>
    </div>
  )
}
