import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


function Square({ value, onClick }) {
    return <button className='btn' onClick={onClick} style={{
        height: '63px',
        width : '63px',
        border : '1px solid black',
    }}>{value}</button>
}
Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function getWinner(squares) {
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];
            if(squares[x] === squares[y] && squares[z] === squares[x]) {
                return squares[x];
            }
        }
        return null;
    }
    useEffect(() => {
        if(!getWinner(squares) && squares.every((item) => item !== '')){
            setStatus("Draw! Please restart the game.");
        }else if(getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}.`);
        }else {
            setStatus(`${isXTurn ? 'X' : 'O'} turn to make a move.`);
        }
    }, [isXTurn, squares]);

    function handleClick(getCurrentSquare) {
        let copySquare = [...squares];
        if (getWinner(squares) || copySquare[getCurrentSquare]) return;
        copySquare[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setXTurn(!isXTurn);
        setSquares(copySquare);
    }

    function handleRestartGame() {
        setXTurn(true);
        setSquares(Array(9).fill(''));
    }

    return (
        <div className="container mt-3 tic-tac-toe d-flex flex-column justify-content-center align-items-center">
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <div className='mt-2'>
                <p>{status}</p>
                <button className='btn btn-primary' onClick={handleRestartGame}>Restart</button>
            </div>
        </div>
    )
}

export default TicTacToe
