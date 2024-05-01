import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.roleIntern.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.roleIntern.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({ title, companyId }: { title: string, companyId: string}) {
  return await prisma.roleIntern.create({
    data: {
      title,
      companyId,
    },
  });
}

export async function update({ id, title }: { id: string; title: string }) {
  return await prisma.roleIntern.update({
    where: {
      id: id,
    },
    data: {
      title,
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.roleIntern.delete({
    where: {
      id: id,
    },
  });
}
