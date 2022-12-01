import Card from "../../components/PagesComponents/Card/Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import style from "./home.module.sass";
import { useEffect, useState } from "react";
import Arrow from "../../components/PagesComponents/Slider/Arrow";
import { useSelector } from "react-redux";
import useServices from "../../services/useServices";

const recomendados = [
  {
    imageUrl: "../../../assets/ImagesCards/ppt.png",
    name: "Piedra, Papel y Tijeras",
    description:
      "Clásico juego donde la piedra rompe la tijera, la tijera corta el papel y el papel envuelve la piedra",
    stars: 5,
    minAge: 5,
    path: "/games/ppt"
  },
  {
    imageUrl:
      "https://play-lh.googleusercontent.com/nbVqMdtZbnkIHZuxmdT73dDKYJ5FWQAFAty_OiRRxeMPmJp1WTCsTD7CwZCa2qhHCSA=w526-h296-rw",
    name: "Adivina Palabra",
    description:
      "Tienes 7 intentos para adivinar la palabra misteriosa, al ir tocando las letras, iras resolviendo la palabra",
    stars: 4,
    minAge: 7,
    path: "/games/adivinapalabra"
  },
  {
    imageUrl:
      "https://st2.depositphotos.com/4071863/7314/v/450/depositphotos_73149227-stock-illustration-trivia-isolated-word-decorative-lettering.jpg",
    name: "Trivia",
    description: "Tienes tres preguntas, si aciertas a la mayoría de la preguntas ganas.",
    stars: 4,
    minAge: 7,
    path: "/games/trivia"
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/486983378/es/vector/piezas-del-rompecabezas-sobre-fondo-blanco-en-colores-brillantes.jpg?s=612x612&w=0&k=20&c=0W6ZI6wStLFAArwaaehLZmFAyEoSpKnDNn1hzCOibq0=",
    name: "Rompecabezas",
    description: "Tienes que armar tu rompecabezas, tienes diferentes tamaños e imagenes",
    minAge: 5,
    stars: 5,
    path: "/games/puzzle"
  },
  {
    imageUrl: "../../../assets/ImagesCards/bloques.svg",
    name: "bloques",
    stars: 4
  },
  {
    imageUrl:
      "https://cdn.dribbble.com/users/369159/screenshots/2305404/media/db4c76bf5d77d596e53fbb85b8b44b63.png?compress=1&resize=400x300&vertical=top",
    name: "Encender Luces",
    description: "El juego consiste en lograr encender todas las luces del tablero",
    minAge: 7,
    stars: 5,
    path: "/games/juegoLuces"
  }
];

const todos = [
  {
    imageUrl: "../../../assets/ImagesCards/chess.svg",
    name: "Aprende ajedrez",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/color.svg",
    name: "Colorea",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/draw.svg",
    name: "Dibuja",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/english.svg",
    name: "Aprende inglés",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/memo.svg",
    name: "Memoriza",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/plusminus.svg",
    name: "Suma y resta",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/words.svg",
    name: "Palabras",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/calcule.svg",
    name: "Calcula",
    stars: 4
  }
];

const Home = () => {
  const { games } = useServices();

  const getBDGames = async () => {
    const { data } = await games.getAll();
    const allGames = data.games.map(game => {
      return { imageUrl: game.cover.path, stars: game.stars, name: game.name };
    });
    return [...todos, ...allGames];
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allGames, setAllGames] = useState(todos);
  const [filteredGames, setFilteredGames] = useState([]);
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

  const { filter } = useSelector(state => state.filter);

  useEffect(() => {
    if (filter)
      setFilteredGames(
        allGames.filter(game => game.name.toLowerCase().includes(filter.toLowerCase()))
      );
    else setFilteredGames(allGames);
  }, [filter]);

  return (
    <div className={style.home}>
      <h2>
        Recomendados <i className="bi bi-award"></i>
      </h2>

      <div className={`${style.cards} "navigation-wrapper"`}>
        <div ref={sliderRef} className="keen-slider">
          {recomendados.map(({ imageUrl, name, stars, description, minAge, path }, i) => (
            <Card
              key={i}
              imageUrl={imageUrl}
              name={name}
              stars={stars}
              path={path}
              description={description}
              minAge={minAge}
            />
          ))}
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
      <h2>Juegos</h2>
      <div className={style.cards_small}>
        {filteredGames.map(({ imageUrl, name, stars, description, minAge, path }, i) => (
          <Card
            key={i}
            imageUrl={imageUrl}
            name={name}
            stars={stars}
            path={path}
            description={description}
            minAge={minAge}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
