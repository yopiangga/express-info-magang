import express from "express";
import * as postActivityServices from "../services/PostActivityServices";
import * as userServices from "../services/UserServices";
import { JWTRequest } from "../middleware/jwtAuth";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const postActivities = await postActivityServices.getAll({ page, limit });
    res.json(postActivities);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const postActivity = await postActivityServices.getOne({ id });
    res.json(postActivity);
  } catch (error) {
    next(error);
  }
});

router.get("/company/:companyId", async (req, res, next) => {
  const companyId = req.params.companyId;

  try {
    const postActivities = await postActivityServices.getAllByCompanyId({
      companyId,
    });
    res.json(postActivities);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const userId = (req as JWTRequest).user.id;
  const { url, caption } = req.body;

  try {
    const user = await userServices.getOne({ id: userId });
    if (!user) {
      res.status(400).json({ message: "Company not found" });
      return;
    }

    const companyId = user?.companyId ?? "";

    try {
      const postActivity = await postActivityServices.create({
        companyId,
        userId,
        url,
        caption,
      });
      res.json(postActivity);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { url, caption } = req.body;

  try {
    const postActivity = await postActivityServices.update({
      id,
      url,
      caption,
    });
    res.json(postActivity);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await postActivityServices.remove({ id });
    res.json({ message: "Post activity deleted" });
  } catch (error) {
    next(error);
  }
});
