import express from "express";
import * as finalReportServices from "../services/FinalReportServices";
import * as userServices from "../services/UserServices";
import { JWTRequest } from "../middleware/jwtAuth";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const finalReports = await finalReportServices.getAll({ page, limit });
    res.json(finalReports);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const finalReport = await finalReportServices.getOne({ id });
    res.json(finalReport);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const userId = (req as JWTRequest).user.id;
  const { url } = req.body;

  try {
    const user = await userServices.getOne({ id: userId });
    if (!user) {
      res.status(400).json({ message: "Company not found" });
      return;
    }

    const companyId = user?.companyId ?? "";

    try {
      const finalReport = await finalReportServices.create({
        companyId,
        userId,
        url,
      });
      res.json(finalReport);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }

});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { url } = req.body;

  try {
    const finalReport = await finalReportServices.update({
      id,
      url,
    });
    res.json(finalReport);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await finalReportServices.remove({ id });
    res.json({ message: "Final report deleted" });
  } catch (error) {
    next(error);
  }
});
