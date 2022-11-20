import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Quizz, Result, Contact, NotFound } from "../screens";
import Nav from "../navigation/Nav";
import Footer from "../components/Footer";

const index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="result" element={<Result />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default index;
