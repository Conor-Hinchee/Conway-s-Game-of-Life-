import React from 'react'
import { Row, Col } from 'reactstrap'
import Button from '../../UI/Button'

const GameButtons = props => {
  return (
    <Row>
      <Col className='text-center'>
        <Button buttonTxt={'Play'} propagateClick = {props.play} />
      </Col>
      <Col className='text-center'>
        <Button buttonTxt={'Pause'} propagateClick = {props.pause} />
      </Col>
      <Col className='text-center'>
        <Button buttonTxt={'clear'} />
      </Col>
    </Row>
  )
}

export default GameButtons
