import * as React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";

export interface GameProps extends RouteComponentProps<{}> {
  push: (url: string) => void;
}

export class Home extends React.Component<GameProps> {
  componentDidMount() {
    this.props.push("/problem/ccf8b282e3f753bb0e5158ddd429a7be");
  }

  render() {
    return (
      <Link to="/problem/ccf8b282e3f753bb0e5158ddd429a7be">
        On homepage, click this to go to 1st problem
      </Link>
    );
  }
}
