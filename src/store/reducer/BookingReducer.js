import { createSlice } from "@reduxjs/toolkit";

// Handle actions related to bookings

const initialState = {
  selectedSeats: [],
  seatPrice: 150,
  price:0,
  name:"",
  theater:"",
  date:""
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
      state.selectedSeats.push(action.payload)
      console.log(state.selectedSeats)
    },
    remove:(state,action)=>{
      let index =state.selectedSeats.indexOf(action.payload) 
      state.selectedSeats.splice(index,1)
    },calculatePrice:(state,action)=>{
      state.price =  state.seatPrice * state.selectedSeats.length;
    },
    selectMovie:(state,action)=>{
      console.log(action.payload)
      state.name = action.payload
      console.log(state.name)
    },
    theater:(state,action)=>{
      state.theater = action.payload
    },
    time:(state,action)=>{
      state.date = action.payload
    }
  },
});

// exporting reducer
export const bookingReducer = bookingSlice.reducer;
// exporting action
export const {select,remove,calculatePrice,selectMovie,theater,time} = bookingSlice.actions;
// exporting Selector
export const bookingSelector  = (state)=>state.bookingReducer.selectedSeats;
// exporting Price Selector
export const priceSelector  = (state)=>state.bookingReducer.price;
// exporting Seat Price Selector
export const seatPriceSelector  = (state)=>state.bookingReducer.seatPrice;
// exporting Movie Selector
export const movieSelector  = (state)=>state.bookingReducer.name;
// exporting Theater Selector
export const theaterSelector  = (state)=>state.bookingReducer.theater;
// exporting Theater Selector

export const timeSelector  = (state)=>state.bookingReducer.date;
export const sel  = (state)=>state.bookingReducer;