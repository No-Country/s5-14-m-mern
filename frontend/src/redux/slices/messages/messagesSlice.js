import { createSlice } from "@reduxjs/toolkit";
import { CHAT_SETIONS } from "../../../components/MessageComponents/utils/chatSetions";

const messagesSlide = createSlice({
  name: "message",
  initialState: {
    selectUser: false,
    firstSectionOfPage: CHAT_SETIONS.searchFriends,
    secondSectionOfPage: CHAT_SETIONS.chat,
    thirdSectionOfPage: null,
    currentUser: {},
    currentMessage: ""
  },
  reducers: {
    setSelectUser: (state, action) => {
      state.selectUser = action.payload;
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
      state.currentUser = action.payload;
    },
    setCurrentMessage: (state, action) => {
      state.currentMessage = action.payload;
    }
  }
});

export const {
  setSelectUser,
  setCurrenMessage,
  setFirstSectionOfPage,
  setSecondSectionOfPage,
  setThirdSectionOfPage,
  setCurrentUser
} = messagesSlide.actions;

export default messagesSlide.reducer;
