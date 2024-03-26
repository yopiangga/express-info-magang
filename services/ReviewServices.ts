import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.review.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.review.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByCompanyId({ companyId }: { companyId: string }) {
  return await prisma.review.findMany({
    where: {
      companyId: companyId,
    },
  });
}

export async function create({
  companyId,
  userId,
  rating,
  comment,
}: {
  companyId: string;
  userId: string;
  rating: number;
  comment: string;
}) {
  return await prisma.review.create({
    data: {
      companyId: companyId,
      userId: userId,
      rating: rating,
      comment,
    },
  });
}

export async function update({
  id,
  companyId,
  userId,
  rating,
  comment,
}: {
  id: string;
  companyId: string;
  userId: string;
  rating: number;
  comment: string;
}) {
  return await prisma.review.update({
    where: {
      id: id,
    },
    data: {
      companyId: companyId,
      userId: userId,
      rating: rating,
      comment,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.review.delete({
    where: {
      id: id,
    },
  });
}
