import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { push } from "react-router-redux";

import * as actionCreators from "../actions/actionCreators";

import { App } from "./App";

function mapStateToProps(state: any) {
  return { ...state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return { ...bindActionCreators({ ...actionCreators, push }, dispatch) };
}

const ConnectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default ConnectedApp;
