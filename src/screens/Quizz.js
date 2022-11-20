import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { questionData } from "../data/questionData";

const Quizz = () => {
  let score = 0;
  const navigate = useNavigate();
  const [prevStep, setPrevStep] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setPrevStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleOnchange();
  };

  const handleBack = () => {
    setPrevStep((prevActiveStep) => prevActiveStep - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setPrevStep(0);
    setActiveStep(1);
  };

  const handleOnchange = () => {
    const checkedRadios = document.querySelectorAll(
      "input[type='radio']:checked"
    );
    score = 0;
    for (const element of checkedRadios) {
      score += Number(element.getAttribute("value"));
    }
    console.log(score);
  };

  return (
    <div className="marginTop">
      <Header
        title={"Test du Quotient Intellectuel de L’Entrepreneur"}
        subTitle={
          "Rentrez des informations verridiques pour que le resultat soit exact"
        }
      />
      <p className="card-2">
        {activeStep}/{questionData.length}
      </p>
      <div className="grid">
        <div className="card-2">
          {questionData.slice(prevStep, activeStep).map((quest, index) => {
            return (
              <form key={index}>
                <p className="question">
                  {activeStep}. {quest.question}
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
            {activeStep > 1 && (
              <>
                <Button value={"Remise a zero"} onClick={() => handleReset()} />
                <Button value={"Précédant"} onClick={() => handleBack()} />
              </>
            )}

            {activeStep !== questionData.length ? (
              <Button value={"Suivant"} onClick={() => handleNext()} />
            ) : (
              <Button
                value={"Voir mon resultat"}
                onClick={() => navigate("/result", { state: { score: score } })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
