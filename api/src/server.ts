import express, { Request, Response } from 'express';
import userRouter from "./routes/user.router";

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
