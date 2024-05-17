import { Link } from 'react-router-dom';
import data from '../../../data/data.json';

const StartMenuContent = () => {

    const subjectList = data.quizzes.map((subject , index) => 
        <Link key={index} to={`/Question/${index}`}>
            <div className='selectionIdle'>
                <div className='choiceText'>
                    <img src={`src/${subject.icon.slice(2)}`} alt={`${subject.title}-icon`} id={subject.title} className='icon'></img>
                    <h4>{subject.title}</h4>
                </div>
            </div>
        </Link>
    )

    return (
    <>
        <div className='title'>
            <div className='headerText'>
                <h2>Welcome to the</h2>
                <h1 >Frontend Quiz!</h1>
            </div>
            <p><i>Pick a subject to get started.</i></p>
        </div>
        <div className="choices">
            {subjectList}
        </div>
    </>
    )
}

export default StartMenuContent
