import { useState } from "react";
import PropTypes from "prop-types";

const Avatar = ({ className, avatar, onClick }) => {
  const [ava, setAva] = useState(
    "https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522154/avatar0_jroqso.svg"
  );

  switch (avatar) {
    case "avatar0":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522154/avatar0_jroqso.svg");
      break;
    case "avatar1":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522154/avatar1_wpdiqs.svg");
      break;
    case "avatar2":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522152/avatar2_qvlhmi.svg");
      break;
    case "avatar3":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522152/avatar3_xnzjfw.svg");
      break;
    case "avatar4":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522152/avatar4_fbqzxi.svg");
      break;
    case "avatar5":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522152/avatar5_wdswra.svg");
      break;
    case "avatar6":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522152/avatar6_ilw3eg.svg");
      break;
    case "avatar7":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522152/avatar7_sutnbh.svg");
      break;
    case "avatar8":
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522186/avatar8_tzjhkz.svg");
      break;

    default:
      setAva("https://res.cloudinary.com/ddg3a37dp/image/upload/v1670522154/avatar0_jroqso.svg");
      break;
  }

  return <img className={className} src={ava} onClick={onClick || null} />;
};

export default Avatar;

Avatar.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
