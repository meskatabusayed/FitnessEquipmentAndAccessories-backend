import express, { Application, Request, Response } from "express";
import cors from "cors";
import { routes } from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFoundRoute";


// express
const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// application routes
app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the server side of fitness-equipment-and-accessories ph");
});


// customize error
app.use(globalErrorHandler)
app.use(notFound)


export default app;