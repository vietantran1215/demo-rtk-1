import { configureStore } from '@reduxjs/toolkit'
import contentReducer from './slices/content.slice';

// SQL -- 1 table ~ 1 module ~ reducer

const store = configureStore({
  reducer: {
    content: contentReducer
  },
})

export default store