import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SeatPlan from "./features/booking/SeatPlan/SeatPlan";
import TicketPlan from "./features/booking/TicketPlan/TicketPlan";
import Home from "./features/movie/Home/Home";
import MovieDetail from "./features/movie/MovieDetail/MovieDetail";
import SignIn from "./features/users/Signup/SignIn/SignIn";
import SignUp from "./features/users/Signup/SignUp";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id/" element={<MovieDetail />}>
          {/* <Route path='ticketPlan' element={
              <TicketPlan />
              }>
            </Route>
            <Route path='checkout' element={
              <Navbar />
              }>
            </Route> */}
        </Route>
        <Route path="/movie/:id/ticketPlan" element={<TicketPlan />}></Route>
        <Route
          path="/movie/seatPlan/:cinemaID"
          element={<SeatPlan/>}
        ></Route>
      </Routes>
    </Router>
    {/* <Navbar /> */}
    {/* <Signup /> */}
    {/* <Signin /> */}
  </div>

  );
}

export default App;
