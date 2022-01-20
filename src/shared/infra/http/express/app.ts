import "dotenv/config";
import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { errorMiddleware } from "./middlewares/ErrorMiddleware";
import swaggerDocument from "../../../../swagger.json";
import swaggerUi from "swagger-ui-express";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);
app.use(errorMiddleware.handle);

export { app };
