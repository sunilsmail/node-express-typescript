import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 4500;

const app: Application = express();

// *  App Configuration

app.use(helmet());
app.use(cors());
app.use(express.json());

// * Server Activation

app.listen(PORT, (): void => {
  console.log("App is running at port - ", PORT);
});
