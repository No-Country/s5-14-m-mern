import classes from "./gameItem.module.sass";
import { Link } from "react-router-dom";
// icon import
import { plus3, plus7, mouse, keyboard, trash, edit } from "../../../../../assets";

import PropTypes from "prop-types";

function GameItem({ id, path, name, description, tags, onDelete }) {
  const tagIcon = icon => {
    switch (icon) {
      case "tp":
        return tp;
      case "+3":
        return plus3;
      case "+7":
        return plus7;
      case "mouse":
        return mouse;
      case "touch":
        return touch;
      case "keyboard":
        return keyboard;
      default:
        return "";
    }
  };

  const handleDelete = () => {
    //TODO: CONFIRMATION
    onDelete(id);
  };

  return (
    <div className={classes.row_table}>
      <div>
        <img src={path} alt={name} />
      </div>
      <div>{name}</div>
      <div className={classes.description}>{description}</div>
      <div>
        {tags.map((icon, index) => {
          const iconImage = tagIcon(icon);
          return <img key={index} src={iconImage} alt={icon} />;
        })}
      </div>
      <div className={classes.buttonsOptions}>
        <Link to={`/admin/game-manage/${id}`}>
          <img src={edit} alt="editar" />
        </Link>
        <button onClick={handleDelete}>
          <img src={trash} alt="borrar" />
        </button>
      </div>
    </div>
  );
}

export default GameItem;

GameItem.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};