import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-3xl font-bold underline bg-slate-500">
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter> */}
   
      Hello world!
    
    </div>
  );
}

export default App;
