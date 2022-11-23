import Card from "../../components/PagesComponents/Card/Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./home.sass";

const data = [
  {
    imageUrl: "../../../assets/ImagesCards/colorea.svg",
    name: "Piedra, Papel y Tijeras",
    description:
      "Clásico juego donde la piedra rompe la tijera, la tijera corta el papel y el papel envuelve la piedra",
    stars: 3,
    minAge: 5,
    path: "/games/ppt"
  },
  {
    imageUrl:
      "https://play-lh.googleusercontent.com/4uRnBeu8_VZc3Nen21rCcrbKe877ytDPK1h2Go1u8xsEbWqHn1yizTGknyq1SiLWWNsS",
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
    imageUrl: "../../../assets/ImagesCards/bloques.svg",
    name: "bloques",
    stars: 4
  },
  {
    imageUrl: "../../../assets/ImagesCards/rompecabezas.svg",
    name: "Rompecabezas",
    stars: 2,
    link: "/puzzle"
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
