// libraries
import { useMediaQuery } from "react-responsive";

// components
import MessagesMobile from "../../components/MessageComponents/MessagesMobile";
import MessagesDesktop from "../../components/MessageComponents/MessagesDesktop";

// styles
import classes from "./messages.module.sass";

const Messages = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 778px)"
  });
  return (
    <div className={classes.messages_content}>
      {isTablet ? <MessagesDesktop /> : <MessagesMobile />}
    </div>
  );
};

export default Messages;
