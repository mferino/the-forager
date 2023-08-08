import type { EvenOrOddState } from "./route.types";
import type { AlphabetMap } from "@/archives/global.types";

import { EVENS, ODDS } from "@/archives/constants";

/*
    make sure string is lowercased
    made into function for future additional validation
  */
export function formatStr(str: string): string {
  return str.toLowerCase();
}

// reset everything when streak ends
export function resetVariables(index: number, state: EvenOrOddState) {
  if (state.currentStreak > state.maxStreak) {
    state.maxStreak = state.currentStreak;
    state.maxStreakStartIndex = state.anchor;
    state.maxStreakEndIndex = index - 1;
  }

  state.anchor = index;
  state.currentStreak = 0;
}

// checks if current letter is even or odd
export function checkEvenOrOdd(
  char: string,
  evens: AlphabetMap,
  odds: AlphabetMap
): boolean | undefined {
  if (char in evens) return evens[char];
  if (char in odds) return odds[char];
}

/*
  main logic, runs through each character and
  calculates the length of the longest streak
  as well as the starting and ending index
*/
export function stringLooper(str: string) {
  /*
    create a state object to keep track of 
    all of the variables we need
  */
  const state: EvenOrOddState = {
    previousEvenOrOdd: undefined,
    currentEvenOrOdd: undefined,
    currentStreak: 0,
    maxStreak: 1,
    maxStreakStartIndex: 0,
    maxStreakEndIndex: 0,
    anchor: 0,
  };

  // regex patterns
  const whiteSpace = /\s/;
  const nonsense = /[^a-z]/;
  /*
      we're going past the end of the string in order
      to run reset variables one more time in order
      to cover all the different end of string cases
    */
  for (let index = 0; index <= str.length; index += 1) {
    const currentChar = str[index];

    // skip this iteration if char is whitespace
    if (whiteSpace.test(currentChar)) continue;
    if (nonsense.test(currentChar)) {
      // do reset logic here to reset counters and indices
      resetVariables(index, state);
    }

    // otherwise... we're in the clear and it's a letter!

    // we need to check if we're even ... or odd?!?!?
    const currentEvenOrOdd = checkEvenOrOdd(currentChar, EVENS, ODDS);

    /*
        check if we have to "start over"
        the && statement accounts for the first iteration
        where evenOrOdd does not equal anything
      */
    if (state.previousEvenOrOdd !== currentEvenOrOdd && index !== 0) {
      resetVariables(index, state);
    }

    // update the current streak
    state.currentStreak += 1;
    // update the current even or odd to the previous variable
    state.previousEvenOrOdd = currentEvenOrOdd;

    // return just what we need for ui
    return {
      maxStreak: state.maxStreak,
      maxStreakStartIndex: state.maxStreakStartIndex,
      maxStreakEndIndex: state.maxStreakEndIndex,
    };
  }
}
