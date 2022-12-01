import Card from "../../components/PagesComponents/Card/Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import style from "./home.module.sass";
import { useState, useEffect } from "react";
import Arrow from "../../components/PagesComponents/Slider/Arrow";
import useServices from "../../services/useServices";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [recommended, setRecommended] = useState();
  const [gamelist, setGamelist] = useState();
  const [isGameListLoading, setIsGameListLoading] = useState(true);
  const { games } = useServices();

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 550px)": { slides: { perView: 3, spacing: 5 } },
      "(min-width: 1410px)": { slides: { perView: 4, spacing: 5 } }
    },
    slides: { perView: 2, spacing: 15 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  useEffect(() => {
    async function gamesLoad() {
      try {
        const { data } = await games.getAll();
        const sorted = data.games.sort((a, b) => b.stars - a.stars).splice(0, 4);
        setRecommended(sorted);
        setGamelist(data.games);
        console.log(data);
        console.log(sorted);
        setIsGameListLoading(false);
      } catch (err) {
        console.log(err);
        setIsGameListLoading(false);
      }
    }
    gamesLoad();
  }, []);

  return (
    <div className={style.home}>
      <h2>
        Recomendados <i className="bi bi-award"></i>
      </h2>
      {isGameListLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className={`${style.cards} "navigation-wrapper"`}>
          <div ref={sliderRef} className="keen-slider">
            {recommended.map(
              ({ cover, name, stars, description, audiencies, comingSoon, folder }, i) => (
                <Card
                  key={i}
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
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={e => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
        </div>
      )}

      <h2>Juegos</h2>
      {isGameListLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className={style.cards_small}>
          {gamelist.map(
            ({ cover, name, stars, description, audiencies, _id, comingSoon, folder }, i) => (
              <Card
                key={i}
                name={name}
                cover={cover.path}
                stars={stars}
                description={description}
                minAge={audiencies}
                path={folder}
                comingSoon={comingSoon}
                size="small"
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
