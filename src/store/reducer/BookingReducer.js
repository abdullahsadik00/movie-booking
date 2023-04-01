import { createSlice } from "@reduxjs/toolkit";

// Handle actions related to bookings

const initialState = {
  movies:[],
  selectedSeats: [],
  seatPrice: 150,
  price:0,
  name:"",
  theater:"",
  date:"",singleMovie:[],time:[]
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

    // select the seats
    select:(state,action)=>{
      state.selectedSeats.push(action.payload)
      console.log(state.selectedSeats)
    },
    //remove the seats
    remove:(state,action)=>{
      let index =state.selectedSeats.indexOf(action.payload) 
      state.selectedSeats.splice(index,1)
    },
    // calculate the price of seats
    calculatePrice:(state,action)=>{
      state.price =  state.seatPrice * state.selectedSeats.length;
    },
    // selected movie name
    selectMovie:(state,action)=>{
      console.log(action.payload)
      state.name = action.payload
      console.log(state.name)
    },
    // selected theater name
    theater:(state,action)=>{
      state.theater = action.payload
    },
    // selected time
    time:(state,action)=>{
      state.date = action.payload
    },
    // save  movie data
    movie:(state,action)=>{
      state.movies=action.payload
      console.log(state.movies)
    },
    timing:(state,action)=>{
      state.timing = action.payload
      console.log(state.timing)
    },
    //select single movie detail
    detail:(state,action)=>{
      console.log(`id received ${action.payload}`)
      console.log(`${state.movies}`)
      let res = state.movies.filter(movie=>movie._id == action.payload)
      state.singleMovie = res
    }
  
  },
});

// exporting reducer
export const bookingReducer = bookingSlice.reducer;
// exporting action
export const {select,remove,calculatePrice,selectMovie,theater,time,movie,detail,timing} = bookingSlice.actions;
// exporting Single Selector
export const singleMovieSelector  = (state)=>state.bookingReducer.movies;
export const movieDetailSelector  = (state)=>state.bookingReducer.singleMovie;















































// exporting Theater Selector
export const timeSelector  = (state)=>state.bookingReducer.date;
export const sel  = (state)=>state.bookingReducer;
// exporting Selector
export const bookingSelector  = (state)=>state.bookingReducer.selectedSeats;
// exporting Price Selector
export const priceSelector  = (state)=>state.bookingReducer.price;
// exporting Seat Price Selector
export const seatPriceSelector  = (state)=>state.bookingReducer.seatPrice;
// exporting Movie Selector
export const movieSelector  = (state)=>state.bookingReducer.name;
export const theaterSelector  = (state)=>state.bookingReducer.theater;
// exporting Theater Selector
