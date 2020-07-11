import React, { useState, useEffect } from "react";
import Counter from "../UI/Counter";
import GameButtons from './GameButtons';
import RNG from '../functions/RNG';
import GameBoard from './GameBoard';

const GameBoardContainer = () => {
    const [clockReference, setClockReference] = useState();
    const [playing, setPlaying] = useState(true);
    const [tick, setTick] = useState(0);
    const [boardSize, setBoardSize] = useState({
        boardSize:"md",
        height: 14,
        width: 26 
    });

    const [gameBoard, setGameBoard] = useState([]);

    useEffect(()=> {
        
        
        const tickInterval = setInterval(() => {
            setTick(prevState => prevState + 1);
        }, 1000);

        setClockReference(tickInterval);


        let seededBoard = [];
        for(let i = 0 ; i < boardSize.height * boardSize.width; i++){
           seededBoard.push(RNG());
        }

        setGameBoard(seededBoard)


        return () => clearInterval(tickInterval);
    }, []);

    const pauseGame = () => {
        clearInterval(clockReference)
        setPlaying(false);
    }

    const playGame = () => {
        if(!playing){
            const tickInterval = setInterval(() => {
                setTick(prevState => prevState + 1);
            }, 1000);
    
            setClockReference(tickInterval);
            setPlaying(true);
        }
        
    }

    return (
        <>
            <Counter generation={tick} />
            <GameButtons 
                play = {playGame}
                pause = {pauseGame}
            />
            <GameBoard board={gameBoard}/>
        </>
    );
}

export default GameBoardContainer;
