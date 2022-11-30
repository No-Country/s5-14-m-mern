// hooks
// import { useSelector } from "react-redux";

// utils
// import { CHAT_SETIONS } from "../utils/chatSetions";

// components
import SearchWraper from "../SearchWraper";
// import MessageUser from "../MessangerUser";

export default function MessagesMobile() {
  // const page = useSelector(state => state.message.currentPage);
  // const SECTIONS = {
  //   [CHAT_SETIONS.searchFriends]: SearchWraper,
  //   [CHAT_SETIONS.userOptions]: MessageUser
  // };

  //  const SectionPage = SECTIONS[page];

  return (
    <div>
      <SearchWraper />
    </div>
  );
}
