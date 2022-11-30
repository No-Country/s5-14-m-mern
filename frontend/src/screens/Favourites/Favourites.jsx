import Card from "../../components/PagesComponents/Card/Card";
import style from "./favourites.module.sass";
import like from "../../../assets/Icons/favFill.svg";
import friend from "../../../assets/Icons/profile2user.svg";

const favs = [
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
  }
];

const Favourites = () => {
  return (
    <div className={style.fav_content}>
      {favs.map(({ imageUrl, name, stars }, i) => (
        <>
          <Card key={i} imageUrl={imageUrl} name={name} stars={stars} size="small" />
          <div className={style.d_flex}>
            <img src={like} />
            <p>Presiona para dejar de seguir</p>
          </div>
          <button className={style.btn}>
            <div className={style.d_flex_button}>
              <img src={friend} />
              <p>¡Desafiar a un amigo!</p>
            </div>
          </button>
        </>
      ))}
    </div>
  );
};

export default Favourites;
