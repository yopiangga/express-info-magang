import prisma from "../prisma";

export async function getOne({ id }) {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

export async function getAll({ page, limit }) {
  const offset = page * limit;
  return await prisma.user.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({ name, email, password }) {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

export async function update({ id, name, email, password, companyId }) {
  return await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      email,
      password,
      companyId: parseInt(companyId),
    },
  });
}

export async function remove({ id }) {
  return await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
}
