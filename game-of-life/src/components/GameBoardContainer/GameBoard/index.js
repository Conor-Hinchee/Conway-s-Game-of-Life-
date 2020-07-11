import React from "react";
import { Row } from 'reactstrap';
import classes from "./GameBoard.module.css";
import spriteAlive from '../../../assets/spriteAlive.png'
// import spriteAlive from '../../../assets/spriteBaby.png'
// import spriteAlive from '../../../assets/spriteDead.png'

const GameBoard = props => {
    // console.log(props.board)
    return (
        <Row className="justify-content-center">
            <div className={classes.GameBoard}>
                { props.board.map((i) => {
                    return (
                        <div
                          className={classes.CellMD}
                        > 
                            {i && 
                                <img src={spriteAlive} className="img-fluid" />
                            }
                        </div>
                    )    
                })}
            </div>
        </Row>
    );
}

export default React.memo(GameBoard);
