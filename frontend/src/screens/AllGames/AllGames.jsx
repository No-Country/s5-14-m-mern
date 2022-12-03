import PropTypes from "prop-types";
import { useState, lazy, Suspense, useEffect, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rate from "../../components/PagesComponents/Stars/Stars";
import style from "./allGames.module.sass";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import FavoriteButton from "../../components/PagesComponents/FavoriteButton/FavoriteButton";
import useServices from "../../services/useServices";

const AllGames = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState();
  const { id } = useParams();
  const { scores } = useServices();
  const { userLogged } = useSelector(state => state.auth);
  const { userInfo } = useSelector(state => state.user);

  const MyGame = lazy(() => import(`../../Games/${id}/index.jsx`)); // Lazy Load of Games

  useEffect(() => {
    if (location.state) {
      (async () => {
        const { gameId, name, description, minAge, stars } = location.state;
        const { data } = await scores.getByGame(gameId);
        setState({ gameId, name, description, minAge, stars, scores: data.scores });
      })();
    } else {
      navigate("/");
    }
  }, []);

  console.log("first");
  const changeScore = useCallback(score => {
    console.log(score);
    console.log(userInfo.username);

    setState({ ...state, scores: [] });
  });

  return (
    <div className={style.games_content}>
      {state && (
        <>
          <h2>{state.name}</h2>
          <div className={style.desktop}>
            <div className={style.screen_games}>
              <Suspense fallback={<SpinnerLoad />}>
                <MyGame gameId={() => state.gameId} changeScore={changeScore} />
              </Suspense>
            </div>
            <div>
              <div className={style.text_start}>
                <h3>Descripción:</h3>
                <p>{state.description}</p>
                <div className={style.d_flex}>
                  <span className={style.circle}>+{state.minAge}</span>
                  <span className={style.circle}>
                    <i className="bi bi-mouse2"></i>
                  </span>
                  <span className={style.circle}>
                    <i className="bi bi-hand-index-thumb"></i>
                  </span>
                </div>
              </div>
              <div className={style.ranking}>
                <div>
                  <h4>Nombre</h4>
                  <h4>Puntuación</h4>
                </div>
                {state.scores.map((score, i) => (
                  <div key={i}>
                    <p>{score.username}</p>
                    <p>{score.score}</p>
                  </div>
                ))}
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
        </>
      )}
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
