import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.company.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
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
  roleInternId,
}: {
  name: string;
  description: string;
  locationId: string;
  requirements: string;
  benefits: string;
  paid: boolean;
  roleInternId: string;
}) {
  return await prisma.company.create({
    data: {
      name,
      description,
      locationId,
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
}: {
  id: string;
  name: string;
  description: string;
  locationId: string;
  requirements: string;
  benefits: string;
  paid: boolean;
}) {
  return await prisma.company.update({
    where: {
      id: id,
    },
    data: {
      name,
      description,
      locationId: locationId,
      requirements,
      benefits,
      paid,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.company.delete({
    where: {
      id: id,
    },
  });
}
