import express, { Application, Response, Request, NextFunction } from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { config } from "./config";

import { router as cityRouter } from "./routes/CityRouter";
import { router as companyImageRouter } from "./routes/CompanyImageRouter";
import { router as companyRouter } from "./routes/CompanyRouter";
import { router as FinalReportRouter } from "./routes/FinalReportRouter";
import { router as locationRouter } from "./routes/LocationRouter";
import { router as postActivityRouter } from "./routes/PostActivityRouter";
import { router as reviewRouter } from "./routes/ReviewRouter";
import { router as roleInternRouter } from "./routes/RoleInternRouter";
import { router as stateRouter } from "./routes/StateRouter";
import { router as userRouter } from "./routes/UserRouter";

dotenv.config();

const app: Application = express();

app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/cities", cityRouter);
app.use("/api/company-images", companyImageRouter);
app.use("/api/companies", companyRouter);
app.use("/api/final-reports", FinalReportRouter);
app.use("/api/locations", locationRouter);
app.use("/api/post-activities", postActivityRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/role-interns", roleInternRouter);
app.use("/api/states", stateRouter);
app.use("/api/users", userRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    message: err.message,
  });
});

app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
