import * as React from 'react';
import { Button, Container } from '@mui/material';
import './setup.css';

function GameType() {
  return (
    <Container className="gameTypeBox">
      <h1>Choose Your Game Type</h1>
      <section className="btnContainer">
        <div className="leftCol">
          <Button className="guidedButton">Guided</Button>
          <p>A sweet explanation of what a guided game entails</p>
        </div>
        <div className="rightCol">
          <Button className="nonguidedButton">Non-Guided</Button>
          <p>A not so sweet explanation of what a non-guided game entails</p>
        </div>
      </section>
    </Container>
  );
}

export default GameType;
