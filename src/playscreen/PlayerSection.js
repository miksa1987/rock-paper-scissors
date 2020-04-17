import React from 'react';
import styled from 'styled-components';

import { Rock, Paper, Scissors } from '../hands/Hands';
import {
  SpinningRock,
  SpinningPaper,
  SpinningScissors,
} from '../hands/SpinningHands';

const Layout = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr / 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerSection = ({ playHand, isPlayable }) => {
  const [hand, setHand] = React.useState(null);

  const playRock = () => {
    if (isPlayable) {
      setHand('rock');
      playHand('rock');
    }
  };

  const playPaper = () => {
    if (isPlayable) {
      setHand('paper');
      playHand('paper');
    }
  };

  const playScissors = () => {
    if (isPlayable) {
      setHand('scissors');
      playHand('scissors');
    }
  };

  return (
    <Layout>
      <Div>
        {hand === 'rock' ? <SpinningRock /> : <Rock onClick={playRock} />}
      </Div>
      <Div>
        {hand === 'paper' ? <SpinningPaper /> : <Paper onClick={playPaper} />}
      </Div>
      <Div>
        {hand === 'scissors' ? (
          <SpinningScissors />
        ) : (
          <Scissors onClick={playScissors} />
        )}
      </Div>
    </Layout>
  );
};
