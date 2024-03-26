import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.location.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.location.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByCityId({ cityId }: { cityId: string }) {
  return await prisma.location.findMany({
    where: {
      cityId: cityId,
    },
  });
}

export async function create({
  latitude,
  longitude,
  cityId,
}: {
  latitude: number;
  longitude: number;
  cityId: string;
}) {
  return await prisma.location.create({
    data: {
      latitude,
      longitude,
      cityId: cityId,
    },
  });
}

export async function update({
  id,
  latitude,
  longitude,
  cityId,
}: {
  id: string;
  latitude: number;
  longitude: number;
  cityId: string;
}) {
  return await prisma.location.update({
    where: {
      id: id,
    },
    data: {
      latitude,
      longitude,
      cityId: cityId,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.location.delete({
    where: {
      id: id,
    },
  });
}
