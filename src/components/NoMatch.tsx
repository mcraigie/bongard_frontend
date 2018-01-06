import * as React from "react";
import { RouteComponentProps } from "react-router";

export class NoMatch extends React.Component<RouteComponentProps<{}>> {
  componentDidMount() {
    this.props.history.push("/problem/ccf8b282e3f753bb0e5158ddd429a7be");
  }

  render() {
    return <p>Page not found.</p>;
  }
}
