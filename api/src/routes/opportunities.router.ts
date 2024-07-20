import {
  getAllOpportunities,
  createOpportunity,
  deleteOpportunity,
  getById,
  updateOpportunity,
} from "./../controllers/opportunities.controller";
import { Router } from "express";

const opportunityRouter = Router();

opportunityRouter.get("/", getAllOpportunities);
opportunityRouter.get("/:id", getById);
opportunityRouter.post("/new", createOpportunity);
opportunityRouter.put("/:id/edit", updateOpportunity);
opportunityRouter.delete("/:id/delete", deleteOpportunity);

export default opportunityRouter;
