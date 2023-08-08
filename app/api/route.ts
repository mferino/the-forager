import type { InputData } from "./route.types";

import { getMaxStreak } from "./route.helpers";
import { z } from "zod";
import { NextResponse } from "next/server";

// schemas
const postSchema = z.string();

export async function POST(request: Request) {
  const data: InputData = await request.json();

  const validatedData = postSchema.parse(data);

  const res = getMaxStreak(validatedData);

  return NextResponse.json(res);
}
