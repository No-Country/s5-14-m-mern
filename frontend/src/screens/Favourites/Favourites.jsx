import Card from "../../components/PagesComponents/Card/Card";
import style from "./favourites.module.sass";
import like from "../../../assets/Icons/favFill.svg";
import friend from "../../../assets/Icons/profile2user.svg";

import useServices from "../../services/useServices";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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
  const [myFavorites, setMyFavorites] = useState([]);

  const { favorites } = useServices();
  const { userInfo } = useSelector(state => state.user);

  useEffect(() => {
    (async () => {
      const { data } = await favorites.getFavorites();
      setMyFavorites(data);
    })();
  }, [userInfo]);

  return (
    <div className={style.fav_content}>
      {myFavorites.map(({ _id, cover, name, stars, folder }, i) => (
        <div key={i}>
          <Card
            gameId={_id}
            cover={cover.path}
            name={name}
            stars={stars}
            size="small"
            path={`/games/${folder}`}
          />
          {/* <div className={style.d_flex}>
            <img src={like} />
            <p>Presiona para dejar de seguir</p>
          </div> */}
          <FavoriteButton favoriteId={_id} />
          <button className={style.btn}>
            <div className={style.d_flex_button}>
              <img src={friend} />
              <p>¡Desafiar a un amigo!</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
