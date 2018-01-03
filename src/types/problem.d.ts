interface Problem {
  id: string;
  nextProblemId: string;
  answers: Array<Diagram>;
  correctAnswerId: string;
  followers: Array<Diagram>;
  rogues: Array<Diagram>;
}
