import PropTypes from "prop-types";
import { useState, lazy, Suspense, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rate from "../../components/PagesComponents/Stars/Stars";
import style from "./allGames.module.sass";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import FavoriteButton from "../../components/PagesComponents/FavoriteButton/FavoriteButton";
import { todopublico, plus3, plus7, mouse, gamepad, keyboard, touch } from "../../../assets";

const AllGames = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({});
  const { id } = useParams();
  const { userLogged } = useSelector(state => state.auth);
  const MyGame = lazy(() => import(`../../Games/${id}/index.jsx`)); // Lazy Load of Games

  useEffect(() => {
    if (location.state) {
      const { gameId, name, description, minAge, stars } = location.state;
      setState({ gameId, name, description, minAge, stars });
      console.log(location.state);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className={style.games_content}>
      <div className={style.name}>
        <h2>{state.name}</h2>
        <Rate change={false} stars={state.stars} />
      </div>
      <div className={style.desktop}>
        <div className={style.screen_games}>
          <Suspense fallback={<SpinnerLoad />}>
            <MyGame />
          </Suspense>
        </div>
        <div>
          <div className={style.text_start}>
            <h3>Descripción:</h3>
            <p>{state.description}</p>
            <div className={style.d_flex}>
              {state.minAge === "tp" && <img src={todopublico} alt="" />}
              {state.minAge === "+3" && <img src={plus3} alt="" />}
              {state.minAge === "+7" && <img src={plus7} alt="" />}
              <img src={mouse} />
              <img src={gamepad} />
              <img src={keyboard} />
              <img src={touch} />
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
          {userLogged && (
            <>
              <FavoriteButton favoriteId={state.gameId} />
              <div className={style.qualify}>
                <h4>Califica el juego</h4>
                <Rate change={true} gameId={state.gameId} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

AllGames.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  minAge: PropTypes.number,
  stars: PropTypes.number,
  folder: PropTypes.string
};

export default AllGames;
