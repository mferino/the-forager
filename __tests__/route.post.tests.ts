import { getMaxStreak } from "@/app/api/route.helpers";

/*
   even letters => acegikmoqsuwy
   odd letters => bdfhjlnprtvxz
*/

describe("get max streak of evens and odds in a string", () => {
  test("medium streak of 5", () => {
    expect(getMaxStreak("This is what your final p")).toEqual({
      maxStreak: 5,
      matchStr: "is is w",
    });
  });

  test("long streak of 9", () => {
    expect(getMaxStreak("Sometimes you will get long streaks")).toEqual({
      maxStreak: 9,
      matchStr: "imes you wi",
    });
  });

  test("no streak", () => {
    expect(getMaxStreak("t 1 h 2 s ! h @ u 9 d * e ) o { t & e 7 k")).toEqual({
      maxStreak: 0,
      matchStr: "",
    });
  });

  test("a tie", () => {
    expect(getMaxStreak("ac bd")).toEqual({
      maxStreak: 2,
      matchStr: "ac "
    })
  })
});
