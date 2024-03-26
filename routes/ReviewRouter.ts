import express from "express";
import * as reviewServices from "../services/ReviewServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const reviews = await reviewServices.getAll({ page, limit });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const review = await reviewServices.getOne({ id });
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.get("/company/:companyId", async (req, res, next) => {
  const companyId = req.params.companyId;

  try {
    const reviews = await reviewServices.getAllByCompanyId({ companyId });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { companyId, userId, rating, comment } = req.body;

  try {
    const review = await reviewServices.create({
      companyId,
      userId,
      rating,
      comment,
    });
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { companyId, userId, rating, comment } = req.body;

  try {
    const review = await reviewServices.update({
      id,
      companyId,
      userId,
      rating,
      comment,
    });
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await reviewServices.remove({ id });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
