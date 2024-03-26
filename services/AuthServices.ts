import prisma from "../prisma";
import { generateToken } from "../helpers/jwtHelper";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user.id.toString(), user.email, user.role);

  return { token, user };
}

export async function signUp({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  if (!user) {
    throw new Error("User not created");
  }

  const token = generateToken(user.id.toString(), user.email, user.role);

  return { token, user };
}
