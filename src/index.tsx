import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import { Switch, Route } from "react-router";

import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import ConnectedApp from "./components/ConnectedApp";
import * as reducers from "./reducers/_index";

import { About } from "./components/About";
import { NoMatch } from "./components/NoMatch";

import "./index.css";

const history = createHistory();

const middleware = routerMiddleware(history);

// tslint:disable-next-line: no-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route exact={true} path="/" component={Home} /> */}
        <Route path="/problem/:problemId" component={ConnectedApp} />
        <Route path="/about" component={About} />
        {/* <Route path="/:user" component={User} /> */}
        <Route component={NoMatch} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
