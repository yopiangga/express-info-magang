import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.user.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

export async function update({
  id,
  name,
  email,
  password,
}: {
  id: string;
  name: string;
  email: string;
  password: string;
}) {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
      password,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
}
