import type { FormInput } from "./route.types";

import { NextResponse } from "next/server";
import { formatStr, stringLooper } from "./route.helpers";

// zod for runtime validation
import { z } from "zod";

// schemas
const postSchema = z.string();

// testing that routes work
export async function GET() {
  return NextResponse.json({ message: "Testing /api route" });
}

export async function POST(request: Request) {
  const data: FormInput = await request.json();

  // run input data through zod validation
  const parsedData = formatStr(postSchema.parse(data));


  // loop through string
  const returnData = stringLooper(parsedData);

  console.log(returnData, " :: evenOrOddState");

  return NextResponse.json(returnData);
}
