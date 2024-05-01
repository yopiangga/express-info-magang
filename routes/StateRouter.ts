import express from "express";
import * as stateServices from "../services/StateServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const states = await stateServices.getAll({ page, limit });
    res.json(states);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const state = await stateServices.getOne({ id });
    res.json(state);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { name, id } = req.body;

  try {
    const state = await stateServices.create({ name, id });
    res.json(state);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const state = await stateServices.update({ id, name });
    res.json(state);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await stateServices.remove({ id });
    res.json({ message: "State deleted successfully" });
  } catch (error) {
    next(error);
  }
});
