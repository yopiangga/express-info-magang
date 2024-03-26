import express from "express";
import * as finalReportServices from "../services/FinalReportServices";

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
  const { companyId, userId, url } = req.body;

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
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { companyId, userId, url } = req.body;

  try {
    const finalReport = await finalReportServices.update({
      id,
      companyId,
      userId,
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
