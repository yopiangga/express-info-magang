import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.company.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.company.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({
  name,
  description,
  locationId,
  requirements,
  benefits,
  paid,
}) {
  return await prisma.company.create({
    data: {
      name,
      description,
      locationId: parseInt(locationId),
      requirements,
      benefits,
      paid,
    },
  });
}

export async function update({
  id,
  name,
  description,
  locationId,
  requirements,
  benefits,
  paid,
}) {
  return await prisma.company.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      description,
      locationId: parseInt(locationId),
      requirements,
      benefits,
      paid,
    },
  });
}

export async function remove({ id }) {
  return await prisma.company.delete({
    where: {
      id: parseInt(id),
    },
  });
}
