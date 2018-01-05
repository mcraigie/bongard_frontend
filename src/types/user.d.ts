interface User {
  id: string;
  bestStreak: number;
  currentStreak: number;
  nextProblemId?: string;
  previousResponseCorrect?: boolean;
}
