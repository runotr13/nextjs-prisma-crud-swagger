import prisma from "@/app/libs/prismadb";
import { logRequest } from "@/utils/middleware";
//register schema
import { registerSchema } from "@/validations/user/register.validation";
import { createEdgeRouter } from "next-connect";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const router = createEdgeRouter<NextRequest, { params?: unknown }>();

router.use(logRequest);

router.post(async (req) => {
  // POST /api/register
  const { email, name, password } = await req.json();
  // Validate request body against the schema
  const { error } = registerSchema.validate({ name, email, password });
  if (error) {
    // If validation fails, send the error details
    return NextResponse.json(
      { error: error.details[0].message },
      { status: 400 }
    );
  }
  // If validation succeeds, send the data
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return NextResponse.json(user);
});

export async function POST(request: NextRequest, ctx: { params?: unknown }) {
  return router.run(request, ctx);
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
