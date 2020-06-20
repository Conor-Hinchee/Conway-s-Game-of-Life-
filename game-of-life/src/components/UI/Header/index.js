import React from "react";
import { Row, Col } from 'reactstrap';

const Header = () => {
    return(
        <Row >
            <Col className="text-center">
                <h1 className="header-txt">The Game Of Life</h1>
                <p className="header-txt">
                    <small>
                        Add cells while playing or clear the board and set up your own game
                    </small>
                </p>
            </Col>
        </Row>
    );
}

export default Header;
