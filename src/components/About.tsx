import * as React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-page">
      <Link to="/problem/ccf8b282e3f753bb0e5158ddd429a7be">
        <p>On homepage click this to go to 1st problem</p>
      </Link>

      <p>
        <a href="https://en.wikipedia.org/wiki/Bongard_problem">Wikipedia</a>
      </p>
    </div>
  );
};
