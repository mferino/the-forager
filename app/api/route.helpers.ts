import { MaxStreakData } from "./route.types";

export function getMaxStreak(str: string) {
  // regexp
  const evens = /[\sacegikmoqsuwy]{2,}/gi;
  const odds = /[\sbdfhjlnprtvxz]{2,}/gi;

  // finding matches
  const evensFound = str.match(evens);
  const oddsFound = str.match(odds);

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

  // If there is a tie return the first occurrence
  if (even.maxStreak < 2 && odd.maxStreak < 2) {
    return {
      maxStreak: 0,
      matchStr: "",
    };
  } else if (even.maxStreak === odd.maxStreak) {
    return str.indexOf(even.matchStr) < str.indexOf(odd.matchStr) ? even : odd;
  } else {
    return even.maxStreak > odd.maxStreak ? even : odd;
  }
}
