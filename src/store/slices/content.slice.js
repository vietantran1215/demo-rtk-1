import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    title: '',
    paragraph: ''
  },
  reducers: {
    updateContent (state, action) {
      const { title, paragraph } = action.payload;
      state.title = title;
      state.paragraph = paragraph;
    }
  }
});

export const { updateContent } = contentSlice.actions; // export để cho View (các component) sử dụng

export default contentSlice.reducer; // export để đăng ký trong store