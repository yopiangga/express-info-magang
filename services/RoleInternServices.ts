import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.roleIntern.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.roleIntern.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({ name }) {
  return await prisma.roleIntern.create({
    data: {
      name,
    },
  });
}

export async function update({ id, name }) {
  return await prisma.roleIntern.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
    },
  });
}

export async function remove({ id }) {
  return await prisma.roleIntern.delete({
    where: {
      id: parseInt(id),
    },
  });
}
