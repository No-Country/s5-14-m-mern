import "keen-slider/keen-slider.min.css";
import style from "./home.module.sass";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/PagesComponents/Card/Card";
import useServices from "../../services/useServices";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import { useNavigate } from "react-router-dom";
import medal from "../../../assets/Icons/medalstar.svg";
// import clock from "../../../assets/Icons/clock.svg";
import magicstar from "../../../assets/Icons/magic-star.svg";

const Home = () => {
  const [recommended, setRecommended] = useState();
  const [gamelist, setGamelist] = useState();
  const [filteredGames, setFilteredGames] = useState();
  const [isGameListLoading, setIsGameListLoading] = useState(true);
  const { games } = useServices();
  const { filter } = useSelector(state => state.filter);
  const navigate = useNavigate();

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 550px)": { slides: { perView: 3, spacing: 5 } },
      "(min-width: 1410px)": { slides: { perView: 4, spacing: 5 } }
    },
    slides: { perView: 2, spacing: 15 }
  });

  useEffect(() => {
    async function gamesLoad() {
      try {
        const { data } = await games.getAll();
        const sorted = data.games.sort((a, b) => b.stars - a.stars).splice(0, 4);
        setRecommended(sorted);
        setGamelist(data.games);
        setIsGameListLoading(false);
        setFilteredGames(data.games);
      } catch (err) {
        setIsGameListLoading(false);
        navigate("/404");
      }
    }
    gamesLoad();
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredGames(
        gamelist.filter(game => game.name.toLowerCase().includes(filter.toLowerCase()))
      );
    } else {
      setFilteredGames(gamelist);
    }
  }, [filter]);

  return (
    <div className={style.home}>
      <div className={style.d_flex}>
        <h2>Recomendados</h2>
        <img src={medal} />
      </div>
      {isGameListLoading ? (
        <SpinnerLoad className={style.spinner} />
      ) : (
        <>
          <div className={`${style.cards} "navigation-wrapper"`}>
            <div ref={sliderRef} className="keen-slider">
              {recommended.map(
                ({ _id, cover, name, stars, description, audiencies, comingSoon, folder }, i) => (
                  <Card
                    key={i}
                    gameId={_id}
                    name={name}
                    cover={cover.path}
                    stars={stars}
                    description={description}
                    minAge={audiencies}
                    path={`/games/${folder}`}
                    comingSoon={comingSoon}
                  />
                )
              )}
            </div>
          </div>
          <div className={style.d_flex}>
            <h2>Juegos</h2>
            <img src={magicstar} />
          </div>
          <div className={style.cards_small}>
            {filteredGames.map(
              ({ _id, cover, name, stars, description, audiencies, comingSoon, folder }, i) => (
                <Card
                  key={i}
                  gameId={_id}
                  name={name}
                  cover={cover.path}
                  stars={stars}
                  description={description}
                  minAge={audiencies}
                  path={`/games/${folder}`}
                  comingSoon={comingSoon}
                  size="small"
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
