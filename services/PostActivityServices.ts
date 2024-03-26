import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.postActivity.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.postActivity.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByCompanyId({ companyId }) {
  return await prisma.postActivity.findMany({
    where: {
      companyId: parseInt(companyId),
    },
  });
}

export async function create({ companyId, userId, url, caption }) {
  return await prisma.postActivity.create({
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(userId),
      url,
      caption,
    },
  });
}

export async function update({ id, companyId, userId, url, caption }) {
  return await prisma.postActivity.update({
    where: {
      id: parseInt(id),
    },
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(userId),
      url,
      caption,
    },
  });
}

export async function remove({ id }) {
  return await prisma.postActivity.delete({
    where: {
      id: parseInt(id),
    },
  });
}
