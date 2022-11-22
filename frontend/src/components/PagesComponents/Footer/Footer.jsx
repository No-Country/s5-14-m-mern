import React from "react";
import "./footer.sass";
import logo from "../../../../assets/Icons/logoFooter.svg";

export const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer">
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
        <div className="term">
          <h3> Términos y condiciones</h3>
          <p> Política de privacidad</p>
          <p> Política de cookies</p>
          <p> Notificaciones de Copyright</p>
          <p> Configuración de cookies</p>
        </div>
        <img className="logoF" src={logo} />
      </div>
      <p className="copyR">Copyright Ludens@ 2022. All rights reserved.</p>
    </div>
  );
};
