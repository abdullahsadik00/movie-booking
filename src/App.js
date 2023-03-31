import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SeatPlan from "./features/booking/SeatPlan/SeatPlan";
import TicketPlan from "./features/booking/TicketPlan/TicketPlan";
import Checkout from "./features/checkout/Checkout";
import Home from "./features/movie/Home/Home";
import MovieDetail from "./features/movie/MovieDetail/MovieDetail";
import SignIn from "./features/users/Signup/SignIn/SignIn";
import Signup from "./features/users/Signup/SignUp";
import SignUp from "./features/users/Signup/SignUp";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
    {/* Providing redux store to entire application */}
    {/* without this, components can't access reducer & actions */}
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/' element={
           <Home />
        }>
        </Route>
        <Route path='/movie/:id/' element={
           <MovieDetail />
        }>
          {/* <Route path='ticketPlan' element={
              <TicketPlan />
              }>
            </Route>
            <Route path='checkout' element={
              <Navbar />
              }>
            </Route> */}
        </Route>
        <Route path='/movie/:id/ticketPlan' element={
              <TicketPlan />
              }>
        </Route>
        <Route path='/movie/seatPlan/:cinemaID'
          element={
            <SeatPlan />
          }>
            
          </Route>
        <Route path='/movie/seatPlan/:cinemaID/checkout'
          element={
            <Checkout />
          }>
            
          </Route>
      </Routes>
    </Router>
    </Provider>
    {/* <Navbar /> */}
    {/* <Signup /> */}
    {/* <Signin /> */}
   
  </div>
  );
}

export default App;
