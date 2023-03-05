export const quizData2 = {
  title: "React Quiz",
  synopsis: "A quiz about React.",
  questions: [
    {
      question:
        "How can you access the state of a component from inside of a member function?",
      picture: "https://some-image-url.com/image.png",
      multipleCorrectAnswers: false,
      options: [
        {
          id: "1",
          answer: "this.getState()",
          isCorrect: false,
        },
        {
          id: "2",
          answer: "this.prototype.stateValue",
          isCorrect: false,
        },
        {
          id: "3",
          answer: "this.state",
          isCorrect: true,
        },
        {
          id: "4",
          answer: "this.values",
          isCorrect: false,
        },
      ],
      explanation:
        "In a class component state is managed and accessed through this.state call",
    },
    {
      id: 1,
      question: "What is React?",
      multipleCorrectAnswers: false,
      picture: "https://reactjs.org/logo-og.png",
      options: [
        {
          id: 200,
          answer: "A front-end framework for building web applications",
          isCorrect: true,
        },
        {
          id: 2545,
          answer: "A back-end database",
          isCorrect: false,
        },
        {
          id: 3545,
          answer: "A programming language",
          isCorrect: false,
        },
        {
          id: 445,
          answer: "An operating system",
          isCorrect: false,
        },
      ],
      explanation:
        "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "Which of the following are hooks in React?",
      multipleCorrectAnswers: true,
      options: [
        {
          id: 7,
          answer: "useState",
          isCorrect: true,
        },
        {
          id: 8,
          answer: "useEffect",
          isCorrect: true,
        },
        {
          id: 99,
          answer: "useContext",
          isCorrect: true,
        },
        {
          id: 100,
          answer: "useReducer",
          isCorrect: true,
        },
        {
          id: 101,
          answer: "useHook",
          isCorrect: false,
        },
        {
          id: 102,
          answer: "useSelect",
          isCorrect: false,
        },
      ],
      explanation:
        "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.",
    },
    {
      question: "Which of the following is not a primary color?",
      picture: null,
      multipleCorrectAnswers: false,
      options: [
        {
          id: "9",
          answer: "Blue",
          isCorrect: false,
        },
        {
          id: "10",
          answer: "Red",
          isCorrect: true,
        },
        {
          id: "11",
          answer: "Yellow",
          isCorrect: false,
        },
        {
          id: "12",
          answer: "Green",
          isCorrect: false,
        },
      ],
      explanation: "The primary colors are red, blue, and yellow.",
    },
    {
      question: "What is the virtual DOM?",
      picture: null,
      multipleCorrectAnswers: false,
      options: [
        {
          id: "13",
          answer: "A lightweight representation of the actual DOM",
          isCorrect: true,
        },
        {
          id: "14",
          answer: "A completely separate copy of the actual DOM",
          isCorrect: false,
        },
        {
          id: "15",
          answer: "A way to optimize rendering in React",
          isCorrect: false,
        },
        {
          id: "16",
          answer: "A tool for debugging React components",
          isCorrect: false,
        },
      ],
      explanation:
        "The virtual DOM is a lightweight representation of the actual DOM that allows React to efficiently update and render components.",
    },
    {
      question: "Which of these programming languages is dynamically typed?",
      picture: null,
      multipleCorrectAnswers: true,
      options: [
        {
          id: "17",
          answer: "Python",
          isCorrect: true,
        },
        {
          id: "18",
          answer: "JavaScript",
          isCorrect: true,
        },
        {
          id: "19",
          answer: "Java",
          isCorrect: false,
        },
        {
          id: "20",
          answer: "Kotlin",
          isCorrect: false,
        },
      ],
      explanation: "Javascript and Python are both dynamic typed languages",
    },
  ],
};
