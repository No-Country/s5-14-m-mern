import { useState } from "react";
import PropTypes from "prop-types";
import {
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8
} from "../../../../assets/index.jsx";

const Avatar = ({ className, avatar, onClick }) => {
  const [ava, setAva] = useState(avatar0);

  switch (avatar) {
    case "avatar0":
      setAva(avatar0);
      break;
    case "avatar1":
      setAva(avatar1);
      break;
    case "avatar2":
      setAva(avatar2);
      break;
    case "avatar3":
      setAva(avatar3);
      break;
    case "avatar4":
      setAva(avatar4);
      break;
    case "avatar5":
      setAva(avatar5);
      break;
    case "avatar6":
      setAva(avatar6);
      break;
    case "avatar7":
      setAva(avatar7);
      break;
    case "avatar8":
      setAva(avatar8);
      break;

    default:
      setAva(avatar0);
      break;
  }

  return <img className={className} src={ava || avatar0} onClick={onClick || null} />;
};

export default Avatar;

Avatar.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
