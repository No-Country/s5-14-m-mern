import React, { useEffect, useState } from "react";
import style from "./favoriteButton.module.sass";

import like from "../../../../assets/Icons/favFill.svg";
import fav from "../../../../assets/Icons/favM.svg";
import { getUserLogged } from "../../../redux/slices/user/userAction";
import useServices from "../../../services/useServices";
import { useDispatch, useSelector } from "react-redux";

const FavoriteButton = ({ favoriteId }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites } = useServices();
  const { userLogged } = useSelector(state => state.auth);
  const { userInfo } = useSelector(state => state.user);

  const handleClick = async () => {
    await favorites.addRemoveFavorite(favoriteId);
    dispatch(getUserLogged(userLogged.id));
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.favorites.includes(favoriteId)) setIsFavorite(true);
      else setIsFavorite(false);
    }
  }, [userInfo, favoriteId]);

  return (
    <div className={style.d_flex}>
      {!isFavorite ? (
        <>
          <img src={fav} alt="" onClick={handleClick} />
          <p>Agregar a tu lista de favoritos</p>
        </>
      ) : (
        <>
          <img src={like} alt="" onClick={handleClick} />
          <p>Presiona para dejar de seguir</p>
        </>
      )}
    </div>
  );
};

export default FavoriteButton;
