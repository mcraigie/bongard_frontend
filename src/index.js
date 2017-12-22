import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import ConnectedApp from './components/App';
import * as reducers from './reducers/index';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const history = createHistory();

const middleware = routerMiddleware(history);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  compose(
    applyMiddleware(middleware),
    devTools
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
