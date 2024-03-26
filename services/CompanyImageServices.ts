import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.companyImage.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.companyImage.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({
  companyId,
  url,
}: {
  companyId: string;
  url: string;
}) {
  return await prisma.companyImage.create({
    data: {
      companyId: companyId,
      url,
    },
  });
}

export async function update({
  id,
  companyId,
  url,
}: {
  id: string;
  companyId: string;
  url: string;
}) {
  return await prisma.companyImage.update({
    where: {
      id: id,
    },
    data: {
      companyId: companyId,
      url,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.companyImage.delete({
    where: {
      id: id,
    },
  });
}
