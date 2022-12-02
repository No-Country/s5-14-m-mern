import { createSlice } from "@reduxjs/toolkit";
import { CHAT_SETIONS } from "../../../components/MessageComponents/utils/chatSetions";

const messagesSlide = createSlice({
  name: "message",
  initialState: {
    currentPage: CHAT_SETIONS.chat,
    firstSectionOfPage: CHAT_SETIONS.searchFriends,
    secondSectionOfPage: CHAT_SETIONS.chat,
    thirdSectionOfPage: null,
    lastPage: "",
    currentUserId: "",
    currentMessage: []
  },
  reducers: {
    setPage: (state, action) => {
      state.lastPage = state.currentPage;
      state.currentPage = action.payload;
    },
    setFirstSectionOfPage: (state, action) => {
      state.firstSectionOfPage = action.payload;
    },
    setSecondSectionOfPage: (state, action) => {
      state.secondSectionOfPage = action.payload;
    },
    setThirdSectionOfPage: (state, action) => {
      state.thirdSectionOfPage = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUserId = action.payload;
    },
    setCurrentMessage: (state, action) => {
      state.currentMessage = action.payload;
    }
  }
});

export const {
  setPage,
  setCurrenMessage,
  setFirstSectionOfPage,
  setSecondSectionOfPage,
  setThirdSectionOfPage,
  setCurrentUser
} = messagesSlide.actions;
export default messagesSlide.reducer;
