import express from "express";
import * as locationServices from "../services/LocationServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const locations = await locationServices.getAll({ page, limit });
    res.json(locations);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const location = await locationServices.getOne({ id });
    res.json(location);
  } catch (error) {
    next(error);
  }
});

router.get("/city/:cityId", async (req, res, next) => {
  const cityId = req.params.cityId;

  try {
    const locations = await locationServices.getAllByCityId({ cityId });
    res.json(locations);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { latitude, longitude, cityId } = req.body;

  try {
    const location = await locationServices.create({
      latitude,
      longitude,
      cityId,
    });
    res.json(location);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { latitude, longitude, cityId } = req.body;

  try {
    const location = await locationServices.update({
      id,
      latitude,
      longitude,
      cityId,
    });
    res.json(location);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await locationServices.remove({ id });
    res.json({ message: "Location deleted" });
  } catch (error) {
    next(error);
  }
});
