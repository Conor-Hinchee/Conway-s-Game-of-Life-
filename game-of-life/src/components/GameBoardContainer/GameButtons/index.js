import React from 'react'
import { Row, Col } from 'reactstrap'
import Button from '../../UI/Button'

const GameButtons = props => {
  return (
    <Row>
      <Col className='text-center'>
        <Button buttonTxt={'Play'} />
      </Col>
      <Col className='text-center'>
        <Button buttonTxt={'Pause'} />
      </Col>
      <Col className='text-center'>
        <Button buttonTxt={'clear'} />
      </Col>
    </Row>
  )
}

export default GameButtons
