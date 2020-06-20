import React from 'react';
import { ButtonToggle } from "reactstrap";

const Button = props => {
    return (
        <ButtonToggle onClick={props.propagateClick} color={props.buttonColor}>
            {props.buttonTxt}
        </ButtonToggle>
    );
}

export default Button;
