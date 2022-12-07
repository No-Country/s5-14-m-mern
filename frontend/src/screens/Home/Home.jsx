import "keen-slider/keen-slider.min.css";
import style from "./home.module.sass";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/PagesComponents/Card/Card";
import useServices from "../../services/useServices";
import SpinnerLoad from "../../components/PagesComponents/SpinnerLoad/SpinnerLoad";
import { useNavigate } from "react-router-dom";
import medal from "../../../assets/Icons/medalstar.svg";
// import clock from "../../../assets/Icons/clock.svg";
import magicstar from "../../../assets/Icons/magic-star.svg";
import arrow from "../../../assets/Icons/arrow.svg";
import { clearFilter } from "../../redux/slices/filter";

const Home = () => {
  const [recommended, setRecommended] = useState();
  const [gamelist, setGamelist] = useState([]);
  const [filteredGames, setFilteredGames] = useState();
  // const [firsts4Games, setFirsts4Games] = useState();
  // const [lasts4Games, setLasts4Games] = useState();
  const [isGameListLoading, setIsGameListLoading] = useState(true);
  const { games } = useServices();
  const { filter } = useSelector(state => state.filter);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        console.log(data);
        const sorted = data.games.sort((a, b) => b.stars - a.stars);
        // const first4 = data.games.splice(0, 4);
        // const lasts4 = data.games.splice(data.games.length - 4, data.games.length);
        setGamelist(data.games);
        setRecommended(sorted.slice(0, 4));
        setFilteredGames(sorted.slice(4));
        // setFirsts4Games(first4);
        // setLasts4Games(lasts4);
        setIsGameListLoading(false);
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
      setFilteredGames(gamelist.sort((a, b) => b.stars - a.stars).slice(4));
    }
  }, [filter]);

  const resetFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <div className={style.home}>
      {isGameListLoading ? (
        <SpinnerLoad className={style.spinner} />
      ) : (
        <>
          {!filter && (
            <>
              <div className={style.d_flex}>
                <h2>Recomendados</h2>
                <img src={medal} />
              </div>
              <div className={`${style.cards} "navigation-wrapper"`}>
                <div ref={sliderRef} className="keen-slider">
                  {recommended.map(
                    (
                      {
                        _id,
                        cover,
                        name,
                        stars,
                        description,
                        audiencies,
                        comingSoon,
                        folder,
                        devices
                      },
                      i
                    ) => (
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
                        devices={devices}
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
                  (
                    {
                      _id,
                      cover,
                      name,
                      stars,
                      description,
                      audiencies,
                      comingSoon,
                      folder,
                      devices
                    },
                    i
                  ) => (
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
                      devices={devices}
                    />
                  )
                )}
              </div>
              {/* <div className={`${style.d_flex} ${style.prox}`}>
                <h2>Proximamente</h2>
                <img src={clock} />
              </div> */}
              {/* <div className={style.cards_small}>
                {lasts4Games.map(
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
                      comingSoon={true}
                      size="small"
                      onlyShow={true}
                    />
                  )
                )}
              </div> */}
            </>
          )}
          {filter && (
            <>
              <div className={style.d_flex2}>
                <img onClick={resetFilter} src={arrow} alt="" />
                <h2>Resultado</h2>
              </div>
              <div>
                {filteredGames.map(
                  ({ _id, cover, name, stars, description, audiencies, comingSoon, folder }, i) => (
                    <div key={i} className={style.cards_search}>
                      <Card
                        gameId={_id}
                        name={name}
                        cover={cover.path}
                        stars={stars}
                        description={description}
                        minAge={audiencies}
                        path={`/games/${folder}`}
                        size="small"
                      />
                      <div className={style.desc}>
                        <h3>Descripción:</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
