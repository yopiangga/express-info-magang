import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.location.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.location.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByCityId({ cityId }) {
  return await prisma.location.findMany({
    where: {
      cityId: parseInt(cityId),
    },
  });
}

export async function create({ latitude, longitude, cityId }) {
  return await prisma.location.create({
    data: {
      latitude,
      longitude,
      cityId: parseInt(cityId),
    },
  });
}

export async function update({ id, latitude, longitude, cityId }) {
  return await prisma.location.update({
    where: {
      id: parseInt(id),
    },
    data: {
      latitude,
      longitude,
      cityId: parseInt(cityId),
    },
  });
}

export async function remove({ id }) {
  return await prisma.location.delete({
    where: {
      id: parseInt(id),
    },
  });
}
