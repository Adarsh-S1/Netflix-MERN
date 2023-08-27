import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import Payment from "./Components/Payment/Payment";
import Prepayment from "./Components/Prepayment/Prepayment";
import Userhome from "./Components/Userhome/Userhome";
import Watchmovie from "./Components/Watchmovie/Watchmovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/prepayment" element={<Prepayment />} />
        <Route exact path="/home" element={<Userhome />} />
        <Route exact path="/watchmovie" element={<Watchmovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
