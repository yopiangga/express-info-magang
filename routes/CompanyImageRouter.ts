import express from "express";
import * as companyImageServices from "../services/CompanyImageServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const companyImages = await companyImageServices.getAll({ page, limit });
    res.json(companyImages);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const companyImage = await companyImageServices.getOne({ id });
    res.json(companyImage);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { companyId, url } = req.body;

  try {
    const companyImage = await companyImageServices.create({ companyId, url });
    res.json(companyImage);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { companyId, url } = req.body;

  try {
    const companyImage = await companyImageServices.update({
      id,
      companyId,
      url,
    });
    res.json(companyImage);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await companyImageServices.remove({ id });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
