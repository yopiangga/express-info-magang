import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.state.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.state.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({ name }) {
  return await prisma.state.create({
    data: {
      name,
    },
  });
}

export async function update({ id, name }) {
  return await prisma.state.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
    },
  });
}

export async function remove({ id }) {
  return await prisma.state.delete({
    where: {
      id: parseInt(id),
    },
  });
}
