import React, { useState, useEffect } from "react";
import Counter from "../UI/Counter";
import GameButtons from './GameButtons';

const GameBoardContainer = () => {
    const [tick, setTick] = useState(0);
    // const [interval, set]

    useEffect(()=> {
        
        const tickInterval = setInterval(() => {
            setTick(prevState => prevState + 1);
        }, 1000);

        return () => clearInterval(tickInterval);
    }, []);

    return (
        <>
            <Counter generation={tick} />
            <GameButtons />
        </>
    );
}

export default GameBoardContainer;
