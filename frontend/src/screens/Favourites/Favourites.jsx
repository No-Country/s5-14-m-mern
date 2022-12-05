import Card from "../../components/PagesComponents/Card/Card";
import style from "./favourites.module.sass";
import likes from "../../../assets/Icons/favFill.svg";
import likent from "../../../assets/Icons/favM.svg";
import friend from "../../../assets/Icons/profile2user.svg";
import noSigned from "../../../assets/Icons/noSignFav.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useServices from "../../services/useServices";
import FavoriteButton from "../../components/PagesComponents/FavoriteButton/FavoriteButton";

// const favs = [
//   {
//     imageUrl: "../../../assets/ImagesCards/chess.svg",
//     name: "Aprende ajedrez",
//     stars: 4
//   },
//   {
//     imageUrl: "../../../assets/ImagesCards/color.svg",
//     name: "Colorea",
//     stars: 4
//   },
//   {
//     imageUrl: "../../../assets/ImagesCards/draw.svg",
//     name: "Dibuja",
//     stars: 4
//   }
// ];

const Favourites = () => {
  const [like, setLike] = useState(true);
  // const [isLogged] = useState(userLogged);
  const [myFavorites, setMyFavorites] = useState([]);
  const { userLogged } = useSelector(state => state.auth);
  // const handleLike = () => setLike(!like);

  const { favorites } = useServices();
  const { userInfo } = useSelector(state => state.user);

  useEffect(() => {
    if (userLogged) {
      (async () => {
        const { data } = await favorites.getFavorites();
        setMyFavorites(data);
      })();
    }
  }, [userInfo]);

  return (
    <div className={style.fav_content}>
      {/* Logueado */}
      <div>
        {userLogged ? (
          myFavorites.map(
            ({ _id, cover, name, stars, description, audiencies, comingSoon, folder }, i) => (
              <div key={i} className={style.fav_card}>
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
                <div className={style.side}>
                  <FavoriteButton favoriteId={_id} />
                  <button className={style.btn}>
                    <div className={style.d_flex_button}>
                      <img src={friend} />
                      <p>¡Desafiar a un amigo!</p>
                    </div>
                  </button>
                </div>
              </div>
            )
          )
        ) : (
          <div className={style.not_logged}>
            <img src={noSigned} alt="" />
            <h3>Inicia sesión para ver tus favoritos</h3>
            <Link to="/login">
              <button>Iniciar sesión</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
