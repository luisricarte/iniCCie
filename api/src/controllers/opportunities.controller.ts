import { PrismaClient } from "@prisma/client";

const opportunitiesController = new PrismaClient().academicOpportunities;

export const getAllOpportunities = async (req: any, res: any) => {
  try {
    const allOpportunity = await opportunitiesController.findMany({
      include: {
        teacher_id: true,
        Candidate: true,
      },
    });

    res.status(200).json({ data: allOpportunity });
  } catch (e) {
    console.log(e);
  }
};

export const getById = async (req: any, res: any) => {
  try {
    const opportunityId = req.params.id;
    const opportunity = await opportunitiesController.findFirst({
      where: {
        id: opportunityId,
      },
      include: {
        teacher_id: true,
        Candidate: true,
      },
    });
    res.status(200).json({ data: opportunity });
  } catch (e) {
    console.log(e);
  }
};

export const createOpportunity = async (req: any, res: any) => {
  try {
    const opportunityData = req.body;

    // if (!itsTeacher) {
    //   throw new Error("Professor não existe.");
    // }

    const opportunity = await opportunitiesController.create({
      data: opportunityData,
    });
    res.status(201).json({ data: opportunity });
  } catch (e) {
    console.log(e);
  }
};

export const updateOpportunity = async (req: any, res: any) => {
  try {
    const oppotunityId = req.params.id;
    const oppotunityData = req.body;

    // ADICIONAR VERIFICAÇÃO DE USUÁRIO

    const oppotunity = await opportunitiesController.update({
      where: {
        id: oppotunityId,
      },
      data: oppotunityData,
    });

    res.status(200).json({ data: oppotunity });
  } catch (e) {
    console.log(e);
  }
};

export const deleteOpportunity = async (req: any, res: any) => {
  try {
    const opportunityId = req.params.id;
    const opportunity = await opportunitiesController.delete({
      where: {
        id: opportunityId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};
