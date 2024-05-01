import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.finalReport.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.finalReport.findMany({
    skip: offset,
    take: limit,
  });
}

export function create({
  companyId,
  userId,
  url,
}: {
  companyId: string;
  userId: string;
  url: string;
}) {
  return prisma.finalReport.create({
    data: {
      companyId: companyId,
      userId: userId,
      url,
    },
  });
}

export function update({
  id,
  url,
}: {
  id: string;
  url: string;
}) {
  return prisma.finalReport.update({
    where: {
      id: id,
    },
    data: {
      url,
    },
  });
}

export function remove({ id }: { id: string }) {
  return prisma.finalReport.delete({
    where: {
      id: id,
    },
  });
}
