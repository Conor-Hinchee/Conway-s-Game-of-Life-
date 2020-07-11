import React, { useState, useEffect } from "react";
import Counter from "../UI/Counter";
import GameButtons from './GameButtons';
import RNG from '../functions/RNG';
import GameBoard from './GameBoard';

const GameBoardContainer = () => {
    const [clockReference, setClockReference] = useState();
    const [playing, setPlaying] = useState(false);
    const [tick, setTick] = useState(0);
    // const [boardSize, setBoardSize] = useState({
    //     boardSize:"md",
    //     height: 14,
    //     width: 26 
    // });

    const [boardSize, setBoardSize] = useState({
        boardSize:"md",
        height: 10,
        width: 18 
    });

    // const [boardSize, setBoardSize] = useState({
    //     boardSize:"md",
    //     height: 7,
    //     width: 13 
    // });

    const [gameBoard, setGameBoard] = useState([]);

    useEffect(() => {
        
        
        const tickInterval = setInterval(() => {
            setTick(prevState => prevState + 1);
        }, 1000);

        setClockReference(tickInterval);


        let seededBoard = [];
        for(let i = 0 ; i < boardSize.height * boardSize.width; i++){
            const rng = RNG();
            seededBoard.push({
               status: rng,
               age: rng
            });
        }

        setGameBoard(seededBoard)
        setPlaying(true)

        return () => clearInterval(tickInterval);
    }, []);

    // useEffect (() => {
    //     if(playing){
    //         const corners = [0, boardSize.width - 1, 
    //             boardSize.height -1 * boardSize.width, boardSize.height * boardSize.width -1 
    //         ];

    //         const currentBoard = [...gameBoard];
    //         let updatedBoard = [];
    //         console.log(currentBoard)
            
    //         for(let i = 0 ; i < currentBoard.length; i++){
    //             let neighbors = 0;
                
    //             //corners
    //             if(corners.includes(i)){
    //                 switch (i){
    //                     case corners[0]:
    //                         if(currentBoard[i + boardSize.width -1]){neighbors++}
    //                         if(currentBoard[i + 1]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - 1]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - (Math.abs(i - boardSize.width)-1)]){neighbors++}
    //                         if(currentBoard[boardSize.width + boardSize.width -1]){neighbors++}
    //                         if(currentBoard[boardSize.width + 1]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - boardSize.width]){neighbors++}
    //                         if(currentBoard[boardSize.width]){neighbors++}
    //                     break;

    //                     case corners[1]:
    //                         if(currentBoard[i - 1]){neighbors++}
    //                         if(currentBoard[i - boardSize.width + 1]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - (Math.abs(i - boardSize.width) + 1)]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - i -1]){neighbors++}
    //                         if(currentBoard[i + boardSize.width - 1]){neighbors++}
    //                         if(currentBoard[i + 1]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - 1]){neighbors++}
    //                         if(currentBoard[i + boardSize.width]){neighbors++}
    //                     break;

    //                     case corners[2]:
    //                         if(currentBoard[i + boardSize.width -1]){neighbors++}
    //                         if(currentBoard[i + 1]){neighbors++}
    //                         if(currentBoard[i - 1]){neighbors++}
    //                         if(currentBoard[i - boardSize.width + 1]){neighbors++}
    //                         if(currentBoard[boardSize.width * boardSize.height - i - 1]){neighbors++}
    //                         if(currentBoard[i - i + 1]){neighbors++}
    //                         if(currentBoard[i - boardSize.width]){neighbors++}
    //                         if(currentBoard[i - i]){neighbors++}
    //                     break;

    //                     case corners[3]:
    //                         if(currentBoard[i - 1]){neighbors++}
    //                         if(currentBoard[i - boardSize.width + 1]){neighbors++}
    //                         if(currentBoard[i - boardSize.width - 1]){neighbors++}
    //                         if(currentBoard[i - boardSize.width - boardSize.width + 1]){neighbors++}
    //                         if(currentBoard[i - i + boardSize.width -2]){neighbors++}
    //                         if(currentBoard[i - i]){neighbors++}
    //                         if(currentBoard[i - boardSize.width]){neighbors++}
    //                         if(currentBoard[i - i + boardSize.width -1]){neighbors++}
                          
    //                     break;
    //                 }
    //             }
             
    //             //top
    //             else if(i > 0 && i < boardSize.width -1){
    //                 if(currentBoard[i - 1]){neighbors++}
    //                 if(currentBoard[i + 1]){neighbors++}
    //                 if(currentBoard[boardSize.width * boardSize.height - (Math.abs(i - boardSize.width) - 1)]){neighbors++}
    //                 if(currentBoard[boardSize.width * boardSize.height - (Math.abs(i - boardSize.width) + 1)]){neighbors++}
    //                 if(currentBoard[i + boardSize.width -1]){neighbors++}
    //                 if(currentBoard[i + boardSize.width + 1]){neighbors++}
    //                 if(currentBoard[boardSize.width * boardSize.height - (Math.abs(i - boardSize.width))]){neighbors++}
    //                 if(currentBoard[i + boardSize.width]){neighbors++}
    //             }

    //             //Bottom
    //             else if(i > (boardSize.height - 1) * boardSize.width && i < boardSize.width * boardSize.height -1){
    //                 if(currentBoard[i - 1]){neighbors++}
    //                 if(currentBoard[i + 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width - 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width + 1]){neighbors++}
    //                 if(currentBoard[boardSize.height - 1 * boardSize.width - 1]){neighbors++}
    //                 if(currentBoard[boardSize.height - 1 * boardSize.width + 1]){neighbors++}
    //                 if(currentBoard[boardSize.height - 1 * boardSize.width]){neighbors++}
    //                 if(currentBoard[i - boardSize.width]){neighbors++}
    //             }

    //             //Left
    //             else if(i % boardSize.width === 0){
    //                 if(currentBoard[i + boardSize.width - 1]){neighbors++}
    //                 if(currentBoard[i + 1]){neighbors++}
    //                 if(currentBoard[i - 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width + 1]){neighbors++}
    //                 if(currentBoard[i + boardSize.width + boardSize.width -1]){neighbors++}
    //                 if(currentBoard[i + boardSize.width + 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width]){neighbors++}
    //                 if(currentBoard[i + boardSize.width]){neighbors++}
    //             }

    //             //Right
    //             else if(i % boardSize.width - 1 === 0){
    //                 if(currentBoard[i - 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width + 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width - 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width - boardSize.width +1]){neighbors++}
    //                 if(currentBoard[i + boardSize.width -1]){neighbors++}
    //                 if(currentBoard[i + 1]){neighbors++}
    //                 if(currentBoard[i - boardSize.width]){neighbors++}
    //                 if(currentBoard[i + boardSize.width]){neighbors++}
    //             }

    //             else{
    //                 if(currentBoard[i-1]){ neighbors++; }
    //                 if(currentBoard[i+1]){ neighbors++; }
    //                 if(currentBoard[i - boardSize.width - 1]){ neighbors++; }
    //                 if(currentBoard[i - boardSize.width + 1]){ neighbors++; }
    //                 if(currentBoard[i + boardSize.width - 1]){ neighbors++; }
    //                 if(currentBoard[i + boardSize.width + 1]){ neighbors++; }
    //                 if(currentBoard[i - boardSize.width]){ neighbors++; }
    //                 if(currentBoard[i + boardSize.width]){ neighbors++; }
    //             }
                
                
    //             if(neighbors === 2){ 
    //                 updatedBoard.push(currentBoard[i]);
    //             }else if( neighbors === 3){
    //                 updatedBoard.push(1);
    //             }else{
    //                 updatedBoard.push(0);
    //             }
    //         }

    //         console.log(updatedBoard)            
    //         setGameBoard(updatedBoard)
    //     }

    // }, [tick])

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
