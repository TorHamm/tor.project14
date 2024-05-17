import { useParams } from "react-router-dom";
import data from "../data/data.json";
import ResaultContent from "../components/MainContent/DisplayScore/ResaultContent";
import Layout from "../layout/Layout";

const Resault = () => {
  const { subject } = useParams(); // Destructure subject from useParams
  const selectedSubject = subject !== undefined ? parseInt(subject) : null; // Provide a default value or handle undefined
  const quizData = selectedSubject !== null ? data.quizzes[selectedSubject] : null; // Ensure quizData is null if selectedSubject is null

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
      {selectedSubject !== null && (
        <ResaultContent>
          <div className="questionType">
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
          </div>
        </ResaultContent>
      )}
    </Layout>
  );
};

export default Resault;
