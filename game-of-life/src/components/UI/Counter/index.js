import React from 'react';
import classes from './Counter.module.css'

const Counter = props => {
    return(
        <div className={classes.counterPosition}>
            <p className="header-txt">
                <small className={classes.underlined} >
                    {props.generation}
                </small>
            </p>
        </div>
    );
}

export default Counter;