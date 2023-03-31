import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParagraphs = createAsyncThunk(
  "paragraphs/getParagraphs",
  async (paras, format) => {
    const res = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${
        format === "yes" ? "html" : "text"
      }`
    );

    return res.data;
  }
);

const ParagraphsSlice = createSlice({
  name: "text",
  initialState: {
    paragraph: "",
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchParagraphs.pending, (state, { payload, type }) => {
      state.status = "loading";
    });
    builder.addCase(fetchParagraphs.fulfilled, (state, { payload, type }) => {
      state.status = "succeeded";
      state.paragraph = payload;
    });
    builder.addCase(fetchParagraphs.rejected, (state, { payload, type }) => {
      state.status = "failed";
    });
  },
});

export default ParagraphsSlice.reducer;
