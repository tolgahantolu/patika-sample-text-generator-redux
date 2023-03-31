import { configureStore } from "@reduxjs/toolkit";
import ParagraphsSlice from "./ParagraphsSlice";

const store = configureStore({
  reducer: {
    text: ParagraphsSlice,
  },
});

export default store;
