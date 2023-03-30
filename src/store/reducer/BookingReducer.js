import { createSlice } from "@reduxjs/toolkit";

// Handle actions related to bookings

const initialState = {
  selectedSeats: [],
  seatPrice: 150,
  price:0
};
const bookingSlice = createSlice({
  name: "bookingReducer",
  initialState: initialState,
  reducers: {
    // here we define multiple actions
    // which reducer will be handling.
    // key will be action name
    // value will be a function to perform the action.
    // reducer function takes 2 parameters
    select:(state,action)=>{
      console.log("select action received")
      console.log(action.type)
      state.selectedSeats.push(action.payload)
      console.log(state.selectedSeats)
    },
    remove:(state,action)=>{
      console.log("deselct received")
      let index =state.selectedSeats.indexOf(action.payload) 
      state.selectedSeats.splice(index,1)
      console.log(state.selectedSeats)      
    },calculatePrice:(state,action)=>{
      state.price =  state.seatPrice * state.selectedSeats.length;
      console.log(state.price)
    },
  },
});

// exporting reducer
export const bookingReducer = bookingSlice.reducer;
// exporting action
export const {select,remove,calculatePrice} = bookingSlice.actions;
// exporting Selector
export const bookingSelector  = (state)=>state.bookingReducer.selectedSeats;
// exporting Price Selector
export const priceSelector  = (state)=>state.bookingReducer.price;
