import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderBand from './HeaderBand';
import FooterBand from './FooterBand';

import StatusBand from './StatusBand';
import Problem from './Problem';
import BlankProblem from './BlankProblem';

class GameBand extends Component {
  constructor(props) {
    super(props);
    this.requestProblem = this.requestProblem.bind(this);
  }

  componentDidMount() {
    const { loading } = this.props;

    if (loading) {
      this.requestProblem(this.props.match.params.problemId);
    }
  }

  componentDidUpdate() {
    const { loading } = this.props;

    if (loading) {
      this.requestProblem(this.props.match.params.problemId);
    }
  }

  requestProblem(problemId) {
    const { setCurrentProblem, setError } = this.props;

    fetch(`http://192.168.1.151:8080/${problemId}.json`)
      .then(res => res.json())
      .then(
        currentProblem => setCurrentProblem(currentProblem),
        error => setError(error)
      );
  }

  render() {
    const {
      loading,
      currentProblem,
      isTouchDevice,
      previousAnswerCorrect,
      handleAnswer,
      streaks,
    } = this.props;

    let body = <p>Something went wrong while trying to load the page :(</p>;

    if (loading) {
      body = <BlankProblem />;
    } else if (currentProblem) {
      body = (
        <Problem
          isTouchDevice={isTouchDevice}
          problem={currentProblem}
          handleAnswer={handleAnswer}
        />
      );
    }

    return (
      <div className="game-band">
        <HeaderBand
          bestStreak={streaks.best}
          currentStreak={streaks.current}
        />

        <StatusBand previousAnswerCorrect={previousAnswerCorrect} />

        {body}

        <FooterBand isTouchDevice={isTouchDevice} />
      </div>
    );
  }
}

GameBand.propTypes = {
  isTouchDevice: PropTypes.bool.isRequired,
  currentProblem: PropTypes.object,
  previousAnswerCorrect: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  setCurrentProblem: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default GameBand;