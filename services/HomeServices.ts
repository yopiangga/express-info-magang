import prisma from "../prisma";

export async function getStatistics() {
    const tempTypeIntern = await prisma.company.groupBy({
        by: ['typeIntern'],
        _count: {
            typeIntern: true
        }
    });

    const typeIntern = {
        data: tempTypeIntern.map((item: any) => {
            return item._count.typeIntern
        }),
        categories: tempTypeIntern.map((item: any) => {
            return item.typeIntern
        })
    }

    const tempTypeWork = await prisma.company.groupBy({
        by: ['typeActivity'],
        _count: {
            typeActivity: true
        }
    });

    const typeWork = {
        data: tempTypeWork.map((item: any) => {
            return item._count.typeActivity
        }),
        categories: tempTypeWork.map((item: any) => {
            return item.typeActivity
        })
    }

    const tempPaid = await prisma.company.groupBy({
        by: ['paid'],
        _count: {
            paid: true
        }
    });

    const paid = {
        data: tempPaid.map((item: any) => {
            return item._count.paid
        }),
        categories: tempPaid.map((item: any) => {
            return item.paid == true ? "Paid" : "Unpaid"
        })
    }
    
    const resTempCity = await prisma.company.findMany({
        select: {
            City: {
                select: {
                    name: true,
                }
            },
        },
    })

    const tempCity = resTempCity.map((item: any) => item.City.name);
    const tempCityUnique = [...new Set(tempCity)];
    const tempCityCount = tempCityUnique.map((item) => {
        return tempCity.filter((city) => city === item).length;
    });

    const city = {
        data: tempCityCount,
        categories: tempCityUnique
    }
    
    const resTempState = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
            City: {
                select: {
                    name: true,
                    State: {
                        select: {
                            name: true
                        }
                    }
                }
            }            
        }
    })

    const tempState = resTempState.map((item: any) => item.City.State.name);
    const tempStateUnique = [...new Set(tempState)];
    const tempStateCount = tempStateUnique.map((item) => {
        return tempState.filter((state) => state === item).length;
    });

    const state = {
        data: tempStateCount,
        categories: tempStateUnique
    }

    return {
        typeIntern,
        typeWork,
        paid,
        city,
        state
    }
}


export async function getCounts(){
    const student = await prisma.user.count();

    const company = await prisma.company.count();

    const roleIntern = await prisma.roleIntern.count();

    const postActivity = await prisma.postActivity.count();

    return {
        student,
        company,
        roleIntern,
        postActivity
    }
}