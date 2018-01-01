import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router';
import { push as unboundPush } from 'react-router-redux';

import * as actionCreators from '../actions/actionCreators';

import Home from './Home';
import Game from './Game';
import NoMatch from './NoMatch';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { setAsTouchDevice } = this.props.actions;

    if ('ontouchstart' in document.documentElement) {
      setAsTouchDevice();
    }
  }

  render() {
    const {
      isTouchDevice,
      currentProblem,
      previousAnswerCorrect,
      loading,
      error,
      streaks,
      nextProblemId,
      displayInstructions,
      responses
    } = this.props;

    const {
      setCurrentProblem,
      setError,
      respond,
      push,
      toggleInstructions,
    } = this.props.actions;

    // could make this null if current problem not available
    function respondAndPush(answer) {
      if (responses.filter(r => r.problemId === currentProblem.id).length === 0) {
        respond(currentProblem, answer);
      }

      push(`/problem/${nextProblemId}`);
    }

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={routingProps => (
              <Home
                {...routingProps}
                isTouchDevice={isTouchDevice}
              />
            )}
          />

          <Route
            path="/problem/:problemId"
            render={routingProps => (
              <Game
                {...routingProps}
                isTouchDevice={isTouchDevice}
                currentProblem={currentProblem}
                previousAnswerCorrect={previousAnswerCorrect}
                loading={loading}
                error={error}
                setCurrentProblem={setCurrentProblem}
                setError={setError}
                handleAnswer={respondAndPush}
                streaks={streaks}
                toggleInstructions={toggleInstructions}
                displayInstructions={displayInstructions}
              />
            )}
          />

          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isTouchDevice: PropTypes.bool.isRequired,
  nextProblemId: PropTypes.string.isRequired,
  previousAnswerCorrect: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  currentProblem: PropTypes.shape({
    id: PropTypes.string,
    followers: PropTypes.array,
    rogues: PropTypes.array,
    answers: PropTypes.array,
    correctAnswerId: PropTypes.string,
    nextProblemId: PropTypes.string,
  }),
  error: PropTypes.shape({
    stack: PropTypes.string,
    message: PropTypes.string,
  }),
  streaks: PropTypes.shape({
    best: PropTypes.number,
    current: PropTypes.number,
  }).isRequired,
  actions: PropTypes.shape({
    incrementScore: PropTypes.func,
    push: PropTypes.func,
    respond: PropTypes.func,
    setAsTouchDevice: PropTypes.func,
    setCurrentProblem: PropTypes.func,
    setError: PropTypes.func,
    toggleInstructions: PropTypes.func,
  }).isRequired,
  displayInstructions: PropTypes.bool.isRequired,
};

App.defaultProps = {
  currentProblem: null,
  previousAnswerCorrect: null,
  error: null,
};

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ ...actionCreators, push: unboundPush }, dispatch) };
}

const ConnectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default ConnectedApp;
