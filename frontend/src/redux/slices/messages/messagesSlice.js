import { createSlice } from "@reduxjs/toolkit";
import { CHAT_SETIONS } from "../../../components/MessageComponents/utils/chatSetions";

const messagesSlide = createSlice({
  name: "message",
  initialState: {
    currentPage: CHAT_SETIONS.searchFriends,
    lastPage: "",
    currentUserId: "",
    currentMessage: []
  },
  reducers: {
    setPage: (state, action) => {
      state.lastPage = state.currentPage;
      state.currentPage = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUserId = action.payload;
    },
    setCurrentMessage: (state, action) => {
      state.currentMessage = action.payload;
    }
  }
});

export const { setPage, setCurrenMessage, setCurrentUser } = messagesSlide.actions;
export default messagesSlide.reducer;
