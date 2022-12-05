import Card from "../../components/PagesComponents/Card/Card";
import style from "./favourites.module.sass";
import likes from "../../../assets/Icons/favFill.svg";
import likent from "../../../assets/Icons/favM.svg";
import friend from "../../../assets/Icons/profile2user.svg";
import noSigned from "../../../assets/Icons/noSignFav.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const [like, setLike] = useState(true);
  const { userLogged } = useSelector(state => state.auth);
  const [isLogged] = useState(userLogged);
  const handleLike = () => setLike(!like);

  return (
    <div className={style.fav_content}>
      {/* Logueado */}
      <div>
        {isLogged &&
          favs.map(({ imageUrl, name, stars }, i) => (
            <div key={i} className={style.fav_card}>
              <Card onlyShow={true} cover={imageUrl} name={name} stars={stars} size="small" />
              <div className={style.side}>
                <div className={style.d_flex}>
                  {like && <img src={likes} onClick={handleLike} />}
                  {!like && <img src={likent} onClick={handleLike} />}
                  <p>Eliminar de favoritos</p>
                </div>
                <button className={style.btn}>
                  <div className={style.d_flex_button}>
                    <img src={friend} />
                    <p>¡Desafiar a un amigo!</p>
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* No logueado */}
      {!isLogged && (
        <div className={style.not_logged}>
          <img src={noSigned} alt="" />
          <h3>Inicia sesión para ver tus favoritos</h3>
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favourites;
