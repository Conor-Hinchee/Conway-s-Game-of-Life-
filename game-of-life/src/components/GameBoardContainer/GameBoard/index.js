import React from "react";
import { Row } from 'reactstrap';
import classes from "./GameBoard.module.css";
import spriteAlive from '../../../assets/spriteAlive.png'
// import spriteAlive from '../../../assets/spriteBaby.png'
import spriteDead from '../../../assets/spriteDead.png'

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
                            {i.status ? 
                                <img src={spriteAlive} className="img-fluid" />
                                :
                                <img src={spriteDead} className="img-fluid" />
                            }
                        </div>
                    )    
                })}
            </div>
        </Row>
    );
}

export default React.memo(GameBoard);
