"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const app = (0, express_1.default)();
const port = 3333;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use("/users", user_router_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
