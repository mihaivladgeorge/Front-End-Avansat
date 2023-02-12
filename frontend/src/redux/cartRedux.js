import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      
    },
    removeProduct: (state, action) => { 
      let index = state.products.indexOf(action.payload);
      state.total=state.total- state.products.at(index).price * state.products.at(index).quantity;
      state.quantity -= action.payload;
      state.products.splice(index, 1);
      state.products = [...state.products];
      
      
  },  addQuantity: (state, action) => {
    let index = state.products.indexOf(action.payload);
    state.products.at(index).quantity +=1;
    state.total=state.total+ state.products.at(index).price;
  }, reduceQuantity: (state, action) => {
    let index = state.products.indexOf(action.payload);
    if(state.products.at(index).quantity>0)
      {
        state.products.at(index).quantity -=1;
        state.total=state.total- state.products.at(index).price;
      
      }
  },
  },
});

export const { addProduct, removeProduct,addQuantity,reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;