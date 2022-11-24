import PropTypes from "prop-types";
import { useState } from "react";
import Rate from "../../components/PagesComponents/Stars/Stars";
import fav from "../../../assets/Icons/favM.svg";
import "./allGames.sass";
import { Outlet, useLocation } from "react-router-dom";

const AllGames = () => {
  const location = useLocation();
  const { name, description, minAge, stars } = location.state;
  const [rating, setRating] = useState(stars);

  return (
    <div className="games-content">
      <h2>{name}</h2>
      <div className="desktop">
        <div className="screen-games">
          <Outlet />
        </div>
        <div>
          <div className="text-start">
            <h3>Descripción:</h3>
            <p>{description}</p>
            <div className="d-flex">
              <span className="circle">+{minAge}</span>
              <span className="circle">
                <i className="bi bi-mouse2"></i>
              </span>
              <span className="circle">
                <i className="bi bi-hand-index-thumb"></i>
              </span>
            </div>
          </div>
          <div className="ranking">
            <h4>Nombre</h4>
            <h4>Puntuación</h4>
            <p>Pedro</p>
            <p>1234</p>
            <p>Juan</p>
            <p>1234</p>
            <p>Ana</p>
            <p>1234</p>
            <p>Marcelo</p>
            <p>1234</p>
            <p>Carla</p>
            <p>1234</p>
          </div>
          <div className="favorites">
            <img src={fav} alt="" />
            <p>Agregar a tu lista de favoritos</p>
          </div>
          <div className="qualify">
            <h4>Califica el juego</h4>
            <Rate rating={rating} onRating={rate => setRating(rate)} />
          </div>
        </div>
      </div>
    </div>
  );
};

AllGames.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  minAge: PropTypes.number,
  stars: PropTypes.number
};

export default AllGames;
