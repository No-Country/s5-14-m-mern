import Card from "../../components/PagesComponents/Card/Card";
import style from "./favourites.module.sass";
import friend from "../../../assets/Icons/profile2user.svg";

import useServices from "../../services/useServices";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FavoriteButton from "../../components/PagesComponents/FavoriteButton/FavoriteButton";

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
