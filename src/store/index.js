import { configureStore } from '@reduxjs/toolkit'
import contentReducer from './slices/content.slice';
import postReducer from './slices/post.slice';

const store = configureStore({
  reducer: {
    // Tương ứng với loại tài nguyên dữ liệu
    content: contentReducer,
    posts: postReducer
  },
})

export default store