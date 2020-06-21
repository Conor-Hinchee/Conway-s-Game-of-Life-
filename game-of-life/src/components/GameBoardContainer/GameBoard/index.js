import React from "react";
import { Row, Col } from 'reactstrap';
import classes from "./GameBoard.module.css";


const GameBoard = props => {
    // console.log(props.board)
    return (
        <Row className="justify-content-center">
            <div className={classes.GameBoard}>
                { props.board.map(() => {
                    return (
                        <div
                          className={classes.CellMD}
                        />
                    )    
                })}
            </div>
        </Row>
    );
}

export default GameBoard;
