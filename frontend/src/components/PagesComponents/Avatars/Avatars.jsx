import { useState } from "react";
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

const Avatars = ({ avatar }) => {
  const [ava, setAva] = useState(avatar0);

  switch (avatar) {
    case avatar0:
      setAva(avatar0);
      break;
    case avatar1:
      setAva(avatar1);
      break;
    case avatar2:
      setAva(avatar2);
      break;

    default:
      setAva(avatar0);
      break;
  }

  return <img src={ava} />;
};

export default Avatars;
