import prisma from "../prisma";

export async function getCompanies(){
    const res = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            latitude: true,
            longitude: true,
            typeIntern: true,
            typeActivity: true,
            City: {},
            images: {}
        }
    })
    return res
}