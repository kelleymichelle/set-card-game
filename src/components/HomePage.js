import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {

  const onNewGameClick = e => {
    console.log(e.target)
  }

  return (
    <Jumbotron>
      <h1>
        Set
      </h1>
      <Button onClick={onNewGameClick}>
        New Game
      </Button>
      <Button>
        How To Play
      </Button>
  </Jumbotron>
  );
}

export default HomePage;