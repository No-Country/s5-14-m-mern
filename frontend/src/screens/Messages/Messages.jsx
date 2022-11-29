import classes from "./messages.module.sass";
import SearchWraper from "../../components/MessageComponents/SearchWraper";

const Messages = () => {
  return (
    <div className={classes.messages_content}>
      <SearchWraper />
    </div>
  );
};

export default Messages;
