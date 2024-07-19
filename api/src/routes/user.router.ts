import { getAllUser, createUser, deleteUser, getById, updateUser } from './../controllers/user.controller';
import { Router } from "express";

const userRouter = Router()

userRouter.get   ("/"          , getAllUser);
userRouter.get   ("/:id"          , getById);
userRouter.post  ("/new", createUser);
userRouter.put   ("/:id/edit"  , updateUser);
userRouter.delete("/:id/delete", deleteUser);


export default userRouter;