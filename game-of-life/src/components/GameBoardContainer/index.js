import React from "react";
import Counter from "../UI/Counter";
import GameButtons from './GameButtons';

const GameBoardContainer = () => {

    return (
        <>

            <Counter generation="1" />
            <GameButtons />
        </>
    );
}

export default GameBoardContainer;
