import type { InputData } from "./route.types";

import { getMaxStreak } from "./route.helpers";
import { z } from "zod";
import { NextResponse } from "next/server";

// schemas
const postSchema = z.string();

export async function POST(request: Request) {
  const data: InputData = await request.json();

  const validatedData = postSchema.parse(data);

  /*
    streak 5
    'is is w' should be highlighte as the streak
  */
  const testStr = "This is what your final p";

  const res = getMaxStreak(testStr);
  console.log(res, " :: res");

  return NextResponse.json(res);
}
