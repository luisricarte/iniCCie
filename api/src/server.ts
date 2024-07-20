import express, { Request, Response } from "express";
import userRouter from "./routes/user.router";
import opportunitiesRouter from "./routes/opportunities.router";

const app = express();
const port = 3333;

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// User Routes
app.use("/users", userRouter);

// Opportunities Routes
app.use("/opportunity", opportunitiesRouter);

// Candidate
app.use("/candidate");
