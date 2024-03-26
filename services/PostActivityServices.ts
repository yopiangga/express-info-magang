import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.postActivity.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.postActivity.findMany({
    skip: offset,
    take: limit,
  });
}

export async function getAllByCompanyId({ companyId }: { companyId: string }) {
  return await prisma.postActivity.findMany({
    where: {
      companyId: companyId,
    },
  });
}

export async function create({
  companyId,
  userId,
  url,
  caption,
}: {
  companyId: string;
  userId: string;
  url: string;
  caption: string;
}) {
  return await prisma.postActivity.create({
    data: {
      companyId: companyId,
      userId: userId,
      url,
      caption,
    },
  });
}

export async function update({
  id,
  companyId,
  userId,
  url,
  caption,
}: {
  id: string;
  companyId: string;
  userId: string;
  url: string;
  caption: string;
}) {
  return await prisma.postActivity.update({
    where: {
      id: id,
    },
    data: {
      companyId: companyId,
      userId: userId,
      url,
      caption,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.postActivity.delete({
    where: {
      id: id,
    },
  });
}
