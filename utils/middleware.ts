import Joi from "joi";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server.js";

export const logRequest = (
  req: NextRequest,
  params: unknown,
  next: () => void
) => {
  console.log(`METHOD => ${req.method}, URL => ${req.url}`);
  return next();
};

//middleware for validating request body
export const validateBody = (schema: Joi.ObjectSchema<any>) => {
  return async (req: NextRequest, params: unknown, next: () => void) => {
    const body = await req.json();
    console.log("body*********", body);
    console.log("schema*********", schema);
    const { error } = schema.validate(body);
    console.log("error*********", error);
    if (error) {
      return NextResponse.json({ error: error.details[0].message });
    }
    return next();
  };
};
