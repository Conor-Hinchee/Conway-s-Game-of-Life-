import React from 'react';
import { Container } from 'reactstrap';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <Container fluid="true" style={{background: '#2D383A'}}>
      <Header /> 
      <GameBoard />
      <Footer />
    </Container>
  );
}

export default App;
