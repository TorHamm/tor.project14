import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ResultContentProps {
    children: ReactNode;
}

const ResaultContent: React.FC<ResultContentProps> = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { score } = location.state || {};

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
        <div className='title'>
            <div className='headerText'>
                <h2>Quiz completed</h2>
                <h1>You scored...</h1>
            </div>
        </div>
        <div className='resaultContainer'>
            <div className='resaultPlate'>
                {children}
                <div className='resaultText'>
                    <h1 className='score'>{ score }</h1>
                    <p>Out of 10</p>
                </div>
            </div>
            <button onClick={handleClick}><h4>Play Agian</h4></button>
        </div>
        </>
    )
}

export default ResaultContent
