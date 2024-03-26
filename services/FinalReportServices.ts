import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.finalReport.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.finalReport.findMany({
    skip: offset,
    take: limit,
  });
}

export function create({ companyId, userId, url }) {
  return prisma.finalReport.create({
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(userId),
      url,
    },
  });
}

export function update({ id, companyId, userId, url }) {
  return prisma.finalReport.update({
    where: {
      id: parseInt(id),
    },
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(userId),
      url,
    },
  });
}

export function remove({ id }) {
  return prisma.finalReport.delete({
    where: {
      id: parseInt(id),
    },
  });
}
