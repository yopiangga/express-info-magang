import express from "express";
import * as userServices from "../services/UserServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const users = await userServices.getAll({ page, limit });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await userServices.getOne({ id });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await userServices.create({ name, email, password });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  try {
    const user = await userServices.update({ id, name, email, password });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await userServices.remove({ id });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
