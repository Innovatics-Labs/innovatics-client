import { BsCollectionPlay } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";

export const careerOutcome = [
  {
    title: "Data Scientist",
    subTitle:
      "They use their skills in data analysis, statistical modeling, and machine learning to solve complex business problems and drive decision-making.",
    icon: <BsCollectionPlay size={24} />,
  },
  {
    title: "Machine Learning Engineer",
    subTitle:
      "Our graduates have landed roles as machine learning engineers, where they develop and deploy machine learning models at scale.",
    icon: <RiStackLine size={24} />,
  },
  {
    title: "Data Analyst",
    subTitle:
      "Our bootcamp provides a solid foundation in data analysis, which prepares our graduates for roles as data analysts.",
    icon: <BiSupport size={24} />,
  },
  {
    title: "Business Analyst",
    subTitle:
      "They use their skills in data analysis, project management, and strategic planning to drive business growth and improve organizational efficiency.",
    icon: <IoBookOutline size={24} />,
  },
];

export const bootcampsList = {
  bootcamps: [
    {
      name: "NLP - Natural Language with Python",
      slug: "natural-language-with-python",
      courseFile: "/documents/NLP - Curriculum.pdf",
      detail: {
        objective:
          "Welcome to the Natural Language Processing course designed to be your complete online resource for learning how to use Natural Language Processing with the Python programming language.\n \n The purpose of this course is to equip a learner with Natural Language Processing to become a world class practitioner of NLP with Python. This course starts with basis topics to establish NLP foundations, then advanced topics, such as sentiment analysis of text with the NLTK library and creating semantic word vectors with the Word2Vec algorithm.",
        price: "$2,990",
        audience: [
          "Students who are Python programming language",
          "Students who want to learn more about Applied Machine Learning",
          "Professionals who are interested in applying Machine Learning and NLP to practical problems. ",
          "Aspiring data scientists and ML engineers interested in NLP.",
          "Developers looking to implement NLP solutions.",
          "Data scientist, Machine Learning Engineer, and Python Developers",
          "Anyone willing to start a career in Data Science, Natural Language Processing, and NLP application such as Sentiment Analysis",
        ],
        goals: [
          "Learn to work with Text Files with Python",
          "Utilize Regular Expressions for pattern searching in text.",
          "Learn NLP pipeline (Stop-words, Whitespace, punctation & number removal, Stemming, Lemmatization)",
          "Use Part of Speech Tagging to automatically process raw text files.",
          "Understand Named Entity Recognition, POS and NER",
          "Use SciKitLearn for Text Classification",
          "Use Latent Dirichlet Allocation for Topic Modelling",
          "Use the Word2Vec algorithm.",
          "Use NLTK for Sentiment Analysis",
          "Learn NLP with different libraries such as NLTK, Spacy, TextBlob, Gensim, Pattern, and Stanford CoreNLP",
        ],
        curriculum: [],
      },
      instructors: [
        {
          name: "Muhammad Medwani",
          description:
            "Founder of Innovatics.ai is an expert data scientist with a passion for transforming data into useful products. He has over 20 years of experience in service delivery management; Ph.D. candidate in AI, four master’s degrees in data science, IT, machine learning, and business administration; and over nine years of experience working with data science. Mo’s specialties include data science, machine learning, big data, deep learning, data analytics, application support and IT service delivery management.",
          position: "Founder - Innovatics.ai",
          link: {
            linkedIn: "",
            twitter: "",
          },
        },
      ],
    },
    {
      name: "Python for Data Science",
      slug: "python-for-data-science",
      courseFile:
        "/documents/Python for Data Science - Batch 3.curriculum.docx",
    },
    {
      name: "SQL for Data Science",
      slug: "sql-for-data-science",
      courseFile: "/documents/NLP - Curriculum.pdf",
    },
    {
      name: "SQL for Data Analytics and Data Science",
      slug: "sql-for-data-analytics-data-science",
      courseFile: "/documents/NLP - Curriculum.pdf",
    },
  ],
};
