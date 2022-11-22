import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { questionData } from "../data/questionData";

const Quizz = () => {
  let score = 0;
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const checkedRadios = document.querySelectorAll(
      "input[type='radio']:checked"
    );
    score = 0;
    for (const element of checkedRadios) {
      score += Number(element.getAttribute("value"));
    }
    console.log(score);
  };
  useEffect(() => {
    document.title = "Test du Quotient Intellectuel de L’Entrepreneur";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="marginTop">
      <Header
        title={"Test du Quotient Intellectuel de L’Entrepreneur"}
        subTitle={
          "Rentrez des informations verridiques pour que le resultat soit exact"
        }
      />

      <div className="grid">
        <div className="card-2">
          {questionData.map((quest, index) => {
            return (
              <form key={index}>
                <p className="question">
                  {index + 1}. {quest.question}
                </p>
                {quest.responses.map((res, index) => {
                  return (
                    <label className="radio" key={index}>
                      <input
                        id={index}
                        type="radio"
                        value={res.point}
                        name="response"
                        onChange={handleOnchange}
                      />
                      <span className="label">
                        {index + 1}. {res.response} ({res.point})
                      </span>
                    </label>
                  );
                })}
              </form>
            );
          })}
          <div className="grid">
            <Button
              value={"Voir mon resultat"}
              onClick={() => navigate("/result", { state: { score: score } })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
