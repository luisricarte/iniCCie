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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getById = exports.getAllUser = void 0;
const client_1 = require("@prisma/client");
const userController = new client_1.PrismaClient().user;
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
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userController.findFirst({
            where: {
                id: userId
            },
            include: {
                AcademicOpportunities: true,
                Candidate: true,
            }
        });
        res.status(200).json({ data: user });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getById = getById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const user = yield userController.create({
            data: userData,
        });
        res.status(201).json({ data: user });
    }
    catch (e) {
        console.log(e);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const user = yield userController.update({
            where: {
                id: userId
            },
            data: userData
        });
        res.status(200).json({ data: user });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userController.delete({
            where: {
                id: userId
            }
        });
        res.status(200).json({ data: {} });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteUser = deleteUser;
