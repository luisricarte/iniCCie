import { PrismaClient } from "@prisma/client";

const userController = new PrismaClient().user;

export const getAllUser = async (req:any, res:any) => {
    try {
        const allUsers = await userController.findMany({
            include: {
                AcademicOpportunities: true,
                Candidate: true,
            }
        })
        
        res.status(200).json({ data: allUsers })
    } catch(e) {
        console.log(e);
    }
}

export const getById = async (req:any, res:any) => {
    try {
        const userId = req.params.id;
        const user = await userController.findFirst({
            where: {
                id: userId
            },
            include: {
                AcademicOpportunities: true,
                Candidate: true,
            }
        })
        res.status(200).json({ data: user })
    } catch (e){
        console.log(e);
    }
}

export const createUser = async (req:any, res:any) => {
    try {
        const userData = req.body;
        const user = await userController.create({
            data: userData,
        })
        res.status(201).json({ data: user })
    } catch (e){
        console.log(e);
    }
}

export const updateUser = async (req:any, res:any) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const user = await userController.update({
            where: {
                id: userId
            },
            data: userData
        })

        res.status(200).json({ data: user })
    } catch (e) {
        console.log(e);
    }
}

export const deleteUser = async (req:any, res:any) => {
    try {
        const userId = req. params.id;
        const user = await userController.delete({
            where: {
                id: userId
            }
        })

        res.status(200).json({ data: {} })
    } catch (e) {
        console.log(e);
    }
}