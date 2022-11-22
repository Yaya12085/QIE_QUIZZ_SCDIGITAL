import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";

const Result = () => {
  const { state } = useLocation();
  const { score } = state;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Résultat de votre test";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!state) {
    return (
      <div className="marginTop">
        <Header title={"Résultat de votre test"} />{" "}
        <Button value={"Passer le test"} onClick={() => navigate("/quizz")} />
      </div>
    );
  }
  let result = "";

  if (score < 60) {
    result =
      "Vous feriez mieux d'envisager une carrière autre qu'un travail indépendant.";
  } else if (score >= 60 && score <= 79) {
    result =
      "Vous n'êtes pas un entrepreneur naturel, mais vous pourriez le devenir à terme.";
  } else if (score >= 80) {
    result =
      "Vous avez à la fois le tempérament et les compétences nécessaires pour devenir un entrepreneur.";
  }

  return (
    <div className="marginTop">
      <Header title={"Résultat de votre test"} />

      <div className="grid">
        <div className="small-card">
          <span>{score}</span>
          <span>point{score > 1 ? "s" : ""}</span>
        </div>
      </div>

      <div className="card">
        <p>{result}</p>
      </div>
      <div className="grid">
        <Button value={"Repasser le test"} onClick={() => navigate("/quizz")} />
      </div>
      <div className="card">
        <h2>Nous vous recommendons ces livres</h2>
        <div className="grid">
          <div className="book-card">
            <img
              src="https://www.cairn.info/vign_rev/DUNOD_HC/DUNOD_RNIOU_2013_01.jpg"
              alt="book"
            />
          </div>
          <div className="book-card">
            <img
              src="https://m.media-amazon.com/images/I/71C5xyCXQaL.jpg"
              alt="book"
            />
          </div>
          <div className="book-card">
            {" "}
            <img
              src="https://m.media-amazon.com/images/I/31NlSCa6gSL.jpg"
              alt="book"
            />
          </div>
          <div className="book-card">
            {" "}
            <img
              src="https://librairie-viedimpact.com/wp-content/uploads/2019/11/E-MYTH-NH.jpg"
              alt="book"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
