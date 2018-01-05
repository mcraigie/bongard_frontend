interface User {
  id: string;
  bestStreak: number;
  currentStreak: number;
  score: number;
  nextProblemId: string;
  previousResponseCorrect?: boolean;
}
