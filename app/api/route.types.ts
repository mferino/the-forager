export type FormInput = {
  input: string;
};

export type EvenOrOddState = {
  previousEvenOrOdd: boolean | undefined;
  currentEvenOrOdd: boolean | undefined;
  currentStreak: number;
  maxStreak: number;
  maxStreakStartIndex: number;
  maxStreakEndIndex: number;
  anchor: number;
};