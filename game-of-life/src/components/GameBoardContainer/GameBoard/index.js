import React from "react";
import { Row } from 'reactstrap';


const GameBoard = props => {
    // console.log(props.board)
    return (
        <Row>
            {props.board}
        </Row>
    );
}

export default GameBoard;
