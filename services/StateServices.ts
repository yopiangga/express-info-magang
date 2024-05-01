import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.state.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.state.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({ name, id }: { name: string, id: string}) {
  return await prisma.state.create({
    data: {
      id,
      name,
    },
  });
}

export async function update({ id, name }: { id: string; name: string }) {
  return await prisma.state.update({
    where: {
      id: id,
    },
    data: {
      name,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.state.delete({
    where: {
      id: id,
    },
  });
}
