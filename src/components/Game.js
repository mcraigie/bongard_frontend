import React, { Component } from "react";
import PropTypes from "prop-types";

import HeaderBand from "./HeaderBand";
import FooterBand from "./FooterBand";

import StatusBand from "./StatusBand";
import Problem from "./Problem";
import BlankProblem from "./BlankProblem";

class GameBand extends Component {
  componentDidMount() {
    this.requestProblem(this.props.match.params.problemId);
  }

  componentDidUpdate() {
    const { loading } = this.props;

    if (loading) {
      this.requestProblem(this.props.match.params.problemId);
    }
  }

  requestProblem = problemId => {
    const { setCurrentProblem, setError } = this.props;

    fetch(`http://127.0.0.1:8080/${problemId}.json`)
      .then(res => res.json())
      .then(currentProblem => setCurrentProblem(currentProblem), error => setError(error));
  };

  render() {
    const {
      loading,
      currentProblem,
      previousAnswerCorrect,
      handleAnswer,
      streaks,
      toggleInstructions,
      displayInstructions,
    } = this.props;

    let body = (
      <p className="incorrect">Something went wrong while trying to contact the server :(</p>
    );

    if (loading) {
      body = <BlankProblem />;
    } else if (currentProblem) {
      body = <Problem problem={currentProblem} handleAnswer={handleAnswer} />;
    }

    return (
      <div className="game-band">
        <HeaderBand
          bestStreak={streaks.best}
          currentStreak={streaks.current}
          toggleInstructions={toggleInstructions}
          displayInstructions={displayInstructions}
        />

        <StatusBand
          previousAnswerCorrect={previousAnswerCorrect}
          displayInstructions={displayInstructions}
        />

        {body}

        <FooterBand />
      </div>
    );
  }
}

GameBand.propTypes = {
  currentProblem: PropTypes.shape({
    id: PropTypes.string,
    followers: PropTypes.array,
    rogues: PropTypes.array,
    answers: PropTypes.array,
    correctAnswerId: PropTypes.string,
    nextProblemId: PropTypes.string,
  }),
  previousAnswerCorrect: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    stack: PropTypes.string,
    message: PropTypes.string,
  }),
  setCurrentProblem: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  streaks: PropTypes.shape({
    best: PropTypes.number,
    current: PropTypes.number,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      problemId: PropTypes.string,
    }),
  }).isRequired,
  toggleInstructions: PropTypes.func.isRequired,
  displayInstructions: PropTypes.bool.isRequired,
};

GameBand.defaultProps = {
  currentProblem: null,
  previousAnswerCorrect: null,
  error: null,
};

export default GameBand;
