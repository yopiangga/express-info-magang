import express from "express";
import * as cityServices from "../services/CityServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const cities = await cityServices.getAll({ page, limit });
    res.json(cities);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const city = await cityServices.getOne({ id });
    res.json(city);
  } catch (error) {
    next(error);
  }
});

router.get("/state/:stateId", async (req, res, next) => {
  const stateId = req.params.stateId;

  try {
    const cities = await cityServices.getAllByStateId({ stateId });
    res.json(cities);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { name, stateId } = req.body;

  try {
    const city = await cityServices.create({ name, stateId });
    res.json(city);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { name, stateId } = req.body;

  try {
    const city = await cityServices.update({ id, name, stateId });
    res.json(city);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const city = await cityServices.remove({ id });
    res.json(city);
  } catch (error) {
    next(error);
  }
});
