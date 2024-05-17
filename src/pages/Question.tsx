import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Layout from "../layout/Layout";
import QuestionContent from "../components/MainContent/Question/QuestionContent";

const Question = () => {
  const { subject } = useParams();
  const selectedSubject = subject !== undefined ? parseInt(subject) : null;
  const quizData = selectedSubject !== null ? data.quizzes[selectedSubject] : null;
  
  return (
    <Layout>
      {quizData && (
        <>
          <img
            src={`${quizData.icon.slice(8)}`}
            alt={`${quizData.title}-icon`}
            id={quizData.title}
            className='icon'></img>
          <h4>{quizData.title}</h4>
        </>
      )}
      {selectedSubject !== null && <QuestionContent selectedSubject={selectedSubject} />}
    </Layout>
  );
};

export default Question;
