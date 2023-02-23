import React from "react";
import Quiz from "../../components/Quiz";
import quiz from "../../data/quiz.json";

const QuizPage = () => {
  return (
    <div>
      <Quiz quizData={quiz} />
    </div>
  );
};

export default QuizPage;
