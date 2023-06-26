import prisma from "@/app/libs/prismadb";
import { registerSchema } from "@/validations/user/register.validation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, name, password } = await request.json();
  const { error } = registerSchema.validate({ name, email, password });
  if (error) {
    return NextResponse.json(
      { error: error.details[0].message },
      { status: 400 }
    );
  }
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return NextResponse.json(user);
}

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: string
 *               password:
 *                 type: string
 *                 format: string
 *             example:
 *               name: "Abbas"
 *               email: "abbaslanbay@gmail.com"
 *               password: "123456"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
