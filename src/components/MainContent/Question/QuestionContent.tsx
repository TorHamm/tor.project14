import { useEffect, useState } from "react";
import data from "../../../data/data.json";
import { useNavigate } from "react-router-dom";

interface QuestionContentProps {
  selectedSubject: number;
}

const QuestionContent = ({ selectedSubject }: QuestionContentProps) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [choiceNotSelected, setChoiceNotSelected] = useState(false);
  const [buttonText, setButtonText] = useState("Submit Answer");
  const [imgCrr, setImgCrr] = useState("");
  const [pointer , setPointer] = useState<"auto" | "none">("auto")
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const dataValue = data.quizzes[selectedSubject].questions[questionNumber];

  const handleSelectChoice = (index: number) => {
    setSelectedChoice(index);
  };

  const handleSubmit = () => {
    if (buttonText == "Submit Answer") {
      if (selectedChoice == null) {
        setChoiceNotSelected(true);
        document.getElementById("error")?.scrollIntoView();
      } else if (selectedChoice !== null) {
        setSelectedChoice(null);
        setChoiceNotSelected(false);
        setImgCrr("/images/icon-correct.svg");
        setButtonText("Next Question");
        setPointer("none")

        if (dataValue.options[selectedChoice] == dataValue.answer) {
          setScore(score + 1);
          document.getElementById("selected")?.classList.add("correct");
        } else {
          document.getElementById("selected")?.classList.add("wrong");
        }
      }
    } else if (buttonText == "Next Question") {
      setButtonText("Submit Answer");
      setPointer("auto")
      if (questionNumber < 9) {
        setQuestionNumber(questionNumber + 1);
        setImgCrr("");
      } else {
        navigate(`/Resault/${selectedSubject}`, { state: { score } });
      }
    }
  };

  useEffect(() => {
    const choices = document.querySelectorAll(".selectionIdle");
    choices.forEach(choice => {
      choice.classList.remove("correct", "wrong");
    });
  }, [questionNumber]);

  const letters = ["A", "B", "C", "D"];
  const optionList = dataValue.options.map((choices, index) => (
    <div
      key={index}
      className='selectionIdle'
      id={`${selectedChoice == index ? "selected" : "notSelected"}`}
      onClick={() => handleSelectChoice(index)}>
      <div className="choiceText">
        <div className='icon'>
          <h4>{letters[index]}</h4>
        </div>
        <h4>{choices}</h4>
      </div>
      <img src={choices === dataValue.answer ? imgCrr : ""}></img>
    </div>
  ));

  const submited = {
    pointerEvents: pointer
  };

  const progress = {
    width: `${(questionNumber + 1) * 10}%`,
  };

  const handleErrorDisplay = {
    visibility: choiceNotSelected
      ? "visible"
      : ("hidden" as "visible" | "hidden"),
  };

  return (
    <>
      <div className='question'>
        <div className='questionText'>
          <p>
            <i>Question {questionNumber + 1} of 10</i>
          </p>
          <h3>{dataValue.question}</h3>
        </div>
        <div className='progressBar'>
          <div className='progressPercentage' style={progress}></div>
        </div>
      </div>
      <div className="options">
        <div className='choices' style={submited}>
          {optionList}
        </div>
        <div className="button">
          <button onClick={handleSubmit}>
              <h4>{buttonText}</h4>
          </button>
          <div className='error' style={handleErrorDisplay} id='error'>
            <img src='/images/icon-error.svg'></img>
            <h4>Please select an answer</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionContent;
