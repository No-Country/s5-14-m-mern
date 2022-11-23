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
    imageUrl: "../../../assets/ImagesCards/memoria.svg",
    name: "Juego de memoria",
    stars: 3
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
