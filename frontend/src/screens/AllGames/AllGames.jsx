import PropTypes from "prop-types";
import { useState, lazy, Suspense } from "react";
import Rate from "../../components/PagesComponents/Stars/Stars";
import fav from "../../../assets/Icons/favM.svg";
import style from "./allGames.module.sass";
import { useLocation, useParams } from "react-router-dom";

const AllGames = () => {
  const location = useLocation();
  const { name, description, minAge, stars } = location.state;
  const [rating, setRating] = useState(stars);
  const { id } = useParams();

  // que id corresponde a que modulo para cargar
  // como importamos los modulos para cargar ?
  console.log("folder ", id);
  const MyGame = lazy(() => import(`../../Games/${id}`));

  return (
    <div className={style.games_content}>
      <h2>{name}</h2>
      <div className={style.desktop}>
        <div className={style.screen_games}>
          <Suspense fallback={<p>Cargando...</p>}>
            <MyGame />
          </Suspense>
        </div>
        <div>
          <div className={style.text_start}>
            <h3>Descripción:</h3>
            <p>{description}</p>
            <div className={style.d_flex}>
              <span className={style.circle}>+{minAge}</span>
              <span className={style.circle}>
                <i className="bi bi-mouse2"></i>
              </span>
              <span className={style.circle}>
                <i className="bi bi-hand-index-thumb"></i>
              </span>
            </div>
          </div>
          <div className={style.ranking}>
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
          <div className={style.favorites}>
            <img src={fav} alt="" />
            <p>Agregar a tu lista de favoritos</p>
          </div>
          <div className={style.qualify}>
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
  stars: PropTypes.number,
  folder: PropTypes.string
};

export default AllGames;
