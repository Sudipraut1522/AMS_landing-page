import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Home from "../page/Home";
import Register from "../page/Register";
import Login from "../page/Login";
import BookADemo from "../page/BookADemo";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookademo" element={<BookADemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
