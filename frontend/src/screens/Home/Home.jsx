import Card from "../../components/PagesComponents/Card/Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./home.sass";

const data = [
  {
    imageUrl:
      "https://media.istockphoto.com/id/1056840214/es/vector/piedra-papel-tijera-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=csejv5CWnlwVtrAlElVS4V5ZDxWYeh9_tP7clemraDY=",
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
    imageUrl: "http://www.coachingintegral.cl/images/Preguntas-Significativas.jpg",
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
  }
];

const Home = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": { slides: { perView: 3, spacing: 5 } },
      "(min-width: 1300px)": { slides: { perView: 4, spacing: 5 } }
    },
    slides: { perView: 2, spacing: 15 }
  });

  return (
    <div className="home">
      <h2>Recomendados</h2>
      <div ref={sliderRef} className="cards keen-slider">
        {data.map(({ imageUrl, name, stars, description, minAge, path }, i) => (
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
    </div>
  );
};

export default Home;
