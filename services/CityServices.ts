import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.city.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.city.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByStateId({ stateId }: { stateId: string }) {
  return await prisma.city.findMany({
    where: {
      stateId: stateId,
    },
  });
}

export async function create({
  name,
  stateId,
  id
}: {
  name: string;
  stateId: string;
  id: string;
}) {
  return await prisma.city.create({
    data: {
      name,
      stateId: stateId,
      id
    },
  });
}

export async function update({
  id,
  name,
  stateId,
}: {
  id: string;
  name: string;
  stateId: string;
}) {
  return await prisma.city.update({
    where: {
      id: id,
    },
    data: {
      name,
      stateId: stateId,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.city.delete({
    where: {
      id: id,
    },
  });
}
