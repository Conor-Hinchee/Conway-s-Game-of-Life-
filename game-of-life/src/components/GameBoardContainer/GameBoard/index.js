import React from "react";
import { Row } from 'reactstrap';


const GameBoard = props => {
    return (
        <Row>
            {props.board}
        </Row>
    );
}

export default GameBoard;
