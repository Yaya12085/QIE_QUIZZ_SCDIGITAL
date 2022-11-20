import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="marginTop">
      <Header
        isBtn
        title={"Testez ici votre Quotient Intellectuel d’Entrepreneur"}
        subTitle={"Faites le maintenant, c’est gratuit !!! "}
      />
      <div className="page-content">
        <h2>Qu’est ce qu’un entrepreneur</h2>
        <img
          className="home-img"
          src={require("../assets/images/home-img.png")}
          alt=""
        />
        <p className="home-text">
          Dictionnaire en ligne: C’est Une personne qui organise et gère
          n’importe quelle entreprise, commerciale le plus souvent, d’ordinaire
          en prenant des initiatives et des risques considérables. Anonyme: (Des
          gens trop naifs pour voir des obstacles qui apparaissent evidents pour
          les autres.)
        </p>
        <p className="home-text">
          * Un entrepreneur à succes (et la definition que je prefere): «Une
          personne qui accepte de risquer de largent pour gagner de l’argent.)
        </p>
        <div className="card">
          <h2>Quel genre d'entrepreneur êtes-vous?</h2>
          <p className="home-text">
            Pour vous aider à le savoir, voici un petit questionnaire. Il vous
            aidera à évaluer vos qualifications. Cependant, il est important que
            vous y répondiez en toute honnétetë. Ca ne servirait à rien de
            répondre « comme il faut» à une question si cette reponse n’est pas
            vraie pour vous.
          </p>
          <Button
            value={"Tester maintenant mon QIE"}
            onClick={() => navigate("/quizz")}
          />
        </div>
        <h2>QIE en chiffre </h2>
        <div className="grid">
          <Card number={"52"} text={"Personnes ont tester leurs QIE "} />
          <Card number={"123"} text={"Personnes qui nous ont recommandées"} />
          <Card number={"154"} text={"Personnes nous ont contactées"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
