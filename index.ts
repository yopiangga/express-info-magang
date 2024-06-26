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
import { router as postActivityRouter } from "./routes/PostActivityRouter";
import { router as reviewRouter } from "./routes/ReviewRouter";
import { router as roleInternRouter } from "./routes/RoleInternRouter";
import { router as stateRouter } from "./routes/StateRouter";
import { router as userRouter } from "./routes/UserRouter";
import { router as authRouter } from "./routes/AuthRouter";
import { router as HomeRouter} from "./routes/HomeRouter";
import { router as MapRouter } from "./routes/MapRouter"
import { router as ProfileRouter } from "./routes/ProfileRouter"

import { router as _SetupRouter } from "./routes/_SetupRouter";
import { jwtAuthMiddleware } from "./middleware/jwtAuth";

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

app.use("/_setup", _SetupRouter);

app.use("/api/auth", authRouter);
app.use("/api/cities", cityRouter);
app.use("/api/company-images", companyImageRouter);
app.use("/api/companies", companyRouter);
app.use("/api/final-reports", jwtAuthMiddleware, FinalReportRouter);
app.use("/api/post-activities", jwtAuthMiddleware, postActivityRouter);
app.use("/api/reviews", jwtAuthMiddleware, reviewRouter);
app.use("/api/role-interns", roleInternRouter);
app.use("/api/states", stateRouter);
app.use("/api/users", jwtAuthMiddleware, userRouter);
app.use("/api/home", HomeRouter);
app.use("/api/map", MapRouter)
app.use("/api/profile", jwtAuthMiddleware, ProfileRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    message: err.message,
  });
});

app.listen(config.port, () => {
  console.log(config);
  console.log("Server is running on port " + config.port);
});
