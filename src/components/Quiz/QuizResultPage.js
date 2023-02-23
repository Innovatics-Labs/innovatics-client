import { useState } from "react";

function QuizResultPage(props) {
  const { quizData } = props;
  const [resultFilter, setResultFilter] = useState("all");

  function handleResultFilterChange(event) {
    setResultFilter(event.target.value);
  }

  function getFilteredQuestions() {
    if (resultFilter === "correct") {
      return quizData.questions.filter(
        (question) =>
          question.selectedAnswer &&
          question.correctAnswers.includes(question.selectedAnswer)
      );
    } else if (resultFilter === "incorrect") {
      return quizData.questions.filter(
        (question) =>
          question.selectedAnswer &&
          !question.correctAnswers.includes(question.selectedAnswer)
      );
    } else {
      return quizData.questions;
    }
  }

  const filteredQuestions = getFilteredQuestions();

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>
        You answered {filteredQuestions.length} out of{" "}
        {quizData.questions.length} questions correctly.
      </p>
      <label>Filter by result:</label>
      <select value={resultFilter} onChange={handleResultFilterChange}>
        <option value="all">All</option>
        <option value="correct">Correct</option>
        <option value="incorrect">Incorrect</option>
      </select>
      <ul>
        {filteredQuestions.map((question, index) => (
          <li key={index}>
            <h3>{question.text}</h3>
            <p>Your answer: {question.selectedAnswer}</p>
            <p>Correct answer: {question.correctAnswers.join(", ")}</p>
            <p>{question.explanation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizResultPage;
