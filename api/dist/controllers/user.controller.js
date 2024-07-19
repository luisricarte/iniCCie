"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = void 0;
const client_1 = require("@prisma/client");
const userController = new client_1.PrismaClient().user;
// get all users
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield userController.findMany({
            include: {
                AcademicOpportunities: true,
                Candidate: true,
            }
        });
        res.status(200).json({ data: allUsers });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllUser = getAllUser;
// get users by id
// create user
// update user
// delete user
