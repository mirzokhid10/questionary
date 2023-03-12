import React, { useState } from "react";

function Questionary() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bozes", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: true },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which campany?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: true },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potters books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: true },
        { answerText: "7", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClik = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
  };

  const resetBtn = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <>
          <div className="flex flex-row text-white p-6 bg-[#212843] w-[600px] rounded-2xl gap-x-10">
            <section className="flex flex-col gap-6 w-1/2 text-left">
              <h2 className="text-4xl">
                Questions{" "}
                <span className="text-4xl">{currentQuestion + 1}</span>/
                {questions.length}
              </h2>
              <h4 className="text-2xl">
                {questions[currentQuestion].questionText}
              </h4>
            </section>
            <section className="flex flex-col w-1/2 bg-red gap-5">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() => handleAnswerButtonClik(answerOption.isCorrect)}
                  className="w-full border-4 rounded-lg p-1 text-2xl border-[#28435C]"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </section>
          </div>
        </>
      ) : (
        <div className="bg-[#212843] w-[600px] rounded-2xl flex flex-col text-white justify-center items-center gap-4 text-4xl p-6">
          <h1>
            You have answered {score} of {questions.length}
          </h1>
          <div>{score > 3 ? "Well donee:)" : "Try again:/"}</div>

          <button
            onClick={resetBtn}
            className="text-white text-2xl p-2 w-[100px] rounded-2xl bg-[#212843] border-[#28435C] border-4"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default Questionary;
