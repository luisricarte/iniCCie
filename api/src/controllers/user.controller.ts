import { PrismaClient } from "@prisma/client";

const userController = new PrismaClient().user;



// get all users
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
// get users by id

// create user

// update user

// delete user