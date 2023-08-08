import { MaxStreakData } from "./route.types";

export function getMaxStreak(str: string) {
  // regexp
  const evens = /[\sacegikmoqsuwy]{2,}/gi;
  const odds = /[\sbdfhjlnprtvxz]{2,}/gi;

  // finding matches
  const evensFound = str.match(evens);
  const oddsFound = str.match(odds);

  /* 
    if no matches found on either
    then we can return early
  */
  if (!evensFound && !oddsFound) {
    return {
      maxStreak: 0,
      matchStr: null,
    };
  }

  /*
    Here we're going to iterate through
    each set of matches and grab the
    match with the largest streak.
    We are stripping out white space to 
    not count that towards the length
  */
  const even: MaxStreakData = {
    maxStreak: 0,
    matchStr: "",
  };

  evensFound?.forEach((match) => {
    const length = match.replace(/\s/g, "").length;

    if (length > even.maxStreak) {
      even.maxStreak = length;
      even.matchStr = match;
    }
  });

  const odd: MaxStreakData = {
    maxStreak: 0,
    matchStr: "",
  };

  oddsFound?.forEach((match) => {
    const length = match.replace(/\s/g, "").length;

    if (length > odd.maxStreak) {
      odd.maxStreak = length;
      odd.matchStr = match;
    }
  });

  // If there is a tie return the first
  if (even.maxStreak === odd.maxStreak) {
    const indexOfEven = str.indexOf(even.matchStr);
    const indexOfOdd = str.indexOf(odd.matchStr);
    return indexOfEven > indexOfOdd ? even : odd;
  } else {
    return even.maxStreak > odd.maxStreak ? even : odd;
  }
}
