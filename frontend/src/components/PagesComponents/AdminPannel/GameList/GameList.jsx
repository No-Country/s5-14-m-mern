import classes from "./gameList.module.sass";
import GameItem from "../GameItems/GameItem";
import { useOutletContext } from "react-router-dom";
import Cross from "../../../../../assets/Icons/cross.svg";
import { Link } from "react-router-dom";

function GameList() {
  const [games, setLoadingGames] = useOutletContext();

  const onDelete = id => {
    const newGames = [...games];
    newGames.splice(id, 1);
    // eliminar game en la base de datos
    setLoadingGames(true);
  };

  return (
    <div className={classes.listgames}>
      <Link
        to="/admin/game-manage"
        className={`${classes.addGameButton} ${classes.border_gradient_radius}`}>
        <span>Agregar Juego</span>
        <span>
          <img src={Cross} />
        </span>
      </Link>
      <div className={classes.listgames_list}>
        <div className={classes.listgames_header}>
          <div>Imágen</div>
          <div>Nombre del Juego</div>
          <div>Descripción</div>
          <div>Apto para</div>
          <div>Editar</div>
        </div>
        {games.map(({ _id, cover, name, description, audiencies, devices }, index) => {
          return (
            <GameItem
              key={index}
              id={_id}
              path={cover.path}
              name={name}
              description={description}
              tags={[audiencies, ...devices]}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GameList;
