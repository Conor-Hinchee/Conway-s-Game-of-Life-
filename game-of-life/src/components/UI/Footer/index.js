import React from 'react';
import { Row, Col } from 'reactstrap';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <Row>
            <Col className="text-center">
                <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More
                </a>
            </Col>
            <Col className="text-center">
                <p className={classes.Author}>
                    Made with&nbsp;
                    <FontAwesomeIcon icon={faHeart} className={classes.Heart} /> 
                    &nbsp;by&nbsp;
                    <a className={classes.AuthorLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.conorhinchee.com"
                    >
                        Conor Hinchee
                    </a>
                </p>
            </Col>
        </Row>
    );
}

export default Footer;
