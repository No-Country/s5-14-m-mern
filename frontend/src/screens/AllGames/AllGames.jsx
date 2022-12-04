import PropTypes from "prop-types";
import { useState, lazy, Suspense, useEffect, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rate from "../../components/PagesComponents/Stars/Stars";
import style from "./allGames.module.sass";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import FavoriteButton from "../../components/PagesComponents/FavoriteButton/FavoriteButton";
import useServices from "../../services/useServices";
import { todopublico, plus3, plus7, mouse, gamepad, keyboard, touch } from "../../../assets";

const AllGames = () => {
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
        // eslint-disable-next-line testing-library/no-await-sync-query
        const { data } = await scores.getByGame(gameId);
        setState({ gameId, name, description, minAge, stars, scores: data.scores });
      })();
    }
  }, []);

  console.log("me renderizo");
  const setScores = useCallback(
    score => {
      let newScores = state.scores.filter(score => score.username !== userInfo.username);
      if (newScores.length === state.scores.length)
        newScores.push({ username: userInfo.username, name: state.name, score });
      else {
        newScores = state.scores.map(elem =>
          elem.username !== userInfo.username
            ? elem
            : elem.score > score
            ? elem
            : { username: elem.username, name: elem.name, score }
        );
      }
      const sortedScores = newScores.sort((p1, p2) =>
        p1.score < p2.score ? 1 : p1.score > p2.score ? -1 : 0
      );
      setState({ ...state, scores: sortedScores });
    },
    [userInfo, state]
  );

  return (
    <div className={style.games_content}>
      {state && (
        <>
          <div className={style.name}>
            <h2>{state.name}</h2>
            <Rate change={false} stars={state.stars} />
          </div>
          <div className={style.desktop}>
            <div className={style.screen_games}>
              <Suspense fallback={<SpinnerLoad />}>
                <MyGame />
                <MyGame setScores={setScores} gameId={state.gameId} />
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
