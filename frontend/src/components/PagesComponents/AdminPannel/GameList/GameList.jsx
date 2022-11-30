import classes from "./gameList.module.sass";
import GameItem from "../GameItems/GameItem";
import { useOutletContext } from "react-router-dom";
import Cross from "../../../../../assets/Icons/cross.svg";
import { Link } from "react-router-dom";

function GameList() {
  const [games, setGames] = useOutletContext();

  const onDelete = id => {
    const newGames = [...games];
    newGames.splice(id, 1);
    setGames(newGames);
  };

  return (
    <div className={classes.listgames}>
      <h2>Panel de Administrador</h2>
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
        {games.map(({ id, imageUrl, name, description, audiencies, devices }, index) => {
          return (
            <GameItem
              key={index}
              id={id}
              path={imageUrl}
              name={name}
              description={description}
              tags={[...devices, audiencies]}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GameList;
