import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.city.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.city.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByStateId({ stateId }) {
  return await prisma.city.findMany({
    where: {
      stateId: parseInt(stateId),
    },
  });
}

export async function create({ name, stateId }) {
  return await prisma.city.create({
    data: {
      name,
      stateId: parseInt(stateId),
    },
  });
}

export async function update({ id, name, stateId }) {
  return await prisma.city.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      stateId: parseInt(stateId),
    },
  });
}

export async function remove({ id }) {
  return await prisma.city.delete({
    where: {
      id: parseInt(id),
    },
  });
}
