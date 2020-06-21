import React, { useState, useEffect } from "react";
import Counter from "../UI/Counter";
import GameButtons from './GameButtons';
import RNG from '../functions/RNG';
import GameBoard from './GameBoard';

const GameBoardContainer = () => {
    const [tick, setTick] = useState(0);
    const [boardSize, setBoardSize] = useState({
        boardSize:"md",
        height: 65,
        width: 35 
    });
    const [gameBoard, setGameBoard] = useState([]);

    useEffect(()=> {
        
        
        const tickInterval = setInterval(() => {
            setTick(prevState => prevState + 1);
        }, 1000);


        let seededBoard = [];
        for(let i = 0 ; i < boardSize.height * boardSize.width; i++){
           seededBoard.push(RNG());
        }

        setGameBoard(seededBoard)


        return () => clearInterval(tickInterval);
    }, []);

    return (
        <>
            <Counter generation={tick} />
            <GameButtons />
            <GameBoard board={gameBoard}/>
        </>
    );
}

export default GameBoardContainer;
