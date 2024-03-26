import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.review.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.review.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByCompanyId({ companyId }) {
  return await prisma.review.findMany({
    where: {
      companyId: parseInt(companyId),
    },
  });
}

export async function create({ companyId, userId, rating, comment }) {
  return await prisma.review.create({
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(userId),
      rating: parseInt(rating),
      comment,
    },
  });
}

export async function update({ id, companyId, userId, rating, comment }) {
  return await prisma.review.update({
    where: {
      id: parseInt(id),
    },
    data: {
      companyId: parseInt(companyId),
      userId: parseInt(userId),
      rating: parseInt(rating),
      comment,
    },
  });
}

export async function remove({ id }) {
  return await prisma.review.delete({
    where: {
      id: parseInt(id),
    },
  });
}
