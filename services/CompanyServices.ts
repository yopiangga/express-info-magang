import { TypeActivity, TypeIntern } from "@prisma/client";
import prisma from "../prisma";

export async function getOne({ id }: { id: string }) {
  return await prisma.company.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getAll({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return await prisma.company.findMany({
    skip: offset,
    take: limit,
  });
}

export async function create({
  name,
  description,
  requirements,
  benefits,
  paid,
  latitude,
  longitude,
  cityId,
  typeIntern,
  typeActivity
}: {
  name: string;
  description: string;
  requirements: string;
  benefits: string;
  paid: boolean;
  latitude: string;
  longitude: string;
  cityId: string;
  typeIntern: TypeIntern;
  typeActivity: TypeActivity;
}) {
  return await prisma.company.create({
    data: {
      name,
      description,
      requirements,
      benefits,
      paid,
      latitude,
      longitude,
      cityId,
      typeIntern,
      typeActivity
    },
  });
}

export async function update({
  id,
  name,
  description,
  requirements,
  benefits,
  paid,
  latitude,
      longitude,
      cityId,
      typeIntern,
      typeActivity
}: {
  id: string;
  name: string;
  description: string;
  requirements: string;
  benefits: string;
  paid: boolean;
  latitude: string;
  longitude: string;
  cityId: string;
  typeIntern: TypeIntern;
  typeActivity: TypeActivity;
}) {
  return await prisma.company.update({
    where: {
      id: id,
    },
    data: {
      name,
      description,
      requirements,
      benefits,
      paid,
      latitude,
      longitude,
      cityId,
      typeIntern,
      typeActivity
    },
  });
}

export async function remove({ id }: { id: string }) {
  return await prisma.company.delete({
    where: {
      id: id,
    },
  });
}
