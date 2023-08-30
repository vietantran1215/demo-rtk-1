// store/slices/products.slice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",

  // Dữ liệu lúc đầu của state lưu trữ products
  initialState: {
    data: [],
  },

  // Các reducer function để thực hiện thay đổi state
  reducers: {
    addProduct(state, action) {
      // Thêm 1 product mới vào store
      state.data.push(action.payload.newProduct);
    }
  },
});

// Object Destructuring (ES6) - export actions để cho component sử dụng.
// Redux-toolkit slice sẽ tự động tạo ra các action trùng với tên của reducer của slice
export const { addProduct } = productsSlice.actions;

// Export reducer để "đăng ký" vào store
export default productsSlice.reducer;