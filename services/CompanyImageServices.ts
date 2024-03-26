import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.companyImage.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.companyImage.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({ companyId, url }) {
  return await prisma.companyImage.create({
    data: {
      companyId: parseInt(companyId),
      url,
    },
  });
}

export async function update({ id, companyId, url }) {
  return await prisma.companyImage.update({
    where: {
      id: parseInt(id),
    },
    data: {
      companyId: parseInt(companyId),
      url,
    },
  });
}

export async function remove({ id }) {
  return await prisma.companyImage.delete({
    where: {
      id: parseInt(id),
    },
  });
}
