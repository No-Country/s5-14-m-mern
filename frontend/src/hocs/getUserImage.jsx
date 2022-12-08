import avatar0 from "../../assets/AccountAvatars/avatar0.svg";
import avatar1 from "../../assets/AccountAvatars/avatar1.svg";
import avatar2 from "../../assets/AccountAvatars/avatar2.svg";
import avatar3 from "../../assets/AccountAvatars/avatar3.svg";
import avatar4 from "../../assets/AccountAvatars/avatar4.svg";
import avatar5 from "../../assets/AccountAvatars/avatar5.svg";
import avatar6 from "../../assets/AccountAvatars/avatar6.svg";
import avatar7 from "../../assets/AccountAvatars/avatar7.svg";
import avatar8 from "../../assets/AccountAvatars/avatar8.svg";
import avatarElegido from "../../assets/AccountAvatars/avatarElegido.png";

function getUserImage(avatar) {
  switch (avatar) {
    case "avatar0":
      return avatar0;

    case "avatar1":
      return avatar1;

    case "avatar2":
      return avatar2;

    case "avatar3":
      return avatar3;

    case "avatar4":
      return avatar4;

    case "avatar5":
      return avatar5;

    case "avatar6":
      return avatar6;
    case "avatar7":
      return avatar7;
    case "avatar8":
      return avatar8;
    case "avatarElegido":
      return avatarElegido;
  }
}

export default getUserImage;
