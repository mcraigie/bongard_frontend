import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { push } from "react-router-redux";

import * as actionCreators from "../actions/actionCreators";

import { App } from "./App";

// tslint:disable-next-line: no-any
function mapStateToProps(state: any) {
  return { ...state };
}

// tslint:disable-next-line: no-any
function mapDispatchToProps(dispatch: any, ownProps: any) {
  return { ...bindActionCreators({ ...actionCreators, push }, dispatch) };
}

const ConnectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default ConnectedApp;
