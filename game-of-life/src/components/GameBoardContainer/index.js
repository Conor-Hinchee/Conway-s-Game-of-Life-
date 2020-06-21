import React, { useState, useEffect } from "react";
import Counter from "../UI/Counter";
import GameButtons from './GameButtons';
import RNG from '../functions/RNG';
import GameBoard from './GameBoard';

const GameBoardContainer = () => {
    const [tick, setTick] = useState(0);
    const [boardSize, setBoardSize] = useState("md");
    const [gameBoard, setGameBoard] = useState([]);

    useEffect(()=> {
        
        const tickInterval = setInterval(() => {
            setTick(prevState => prevState + 1);
        }, 1000);

        RNG();

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
