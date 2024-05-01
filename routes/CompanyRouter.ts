import express from "express";
import * as companyServices from "../services/CompanyServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const companies = await companyServices.getAll({ page, limit });
    res.json(companies);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const company = await companyServices.getOne({ id });
    res.json(company);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const {
    name,
    description,
    requirements,
    benefits,
    paid,
    latitude,
    longitude,
    cityId,
    typeIntern,
    typeActivity
  } = req.body;

  try {
    const company = await companyServices.create({
      name,
      description,
      latitude,
      longitude,
      cityId,
      requirements,
      benefits,
      paid,
      typeIntern,
      typeActivity
    });
    res.json(company);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { name, description, requirements, benefits, paid , latitude,
    longitude,
    cityId,
    typeIntern,
    typeActivity} =
    req.body;

  try {
    const company = await companyServices.update({
      id,
      name,
      description,
      requirements,
      benefits,
      paid,
      latitude,
      longitude,
      cityId,
      typeIntern,
      typeActivity
    });
    res.json(company);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await companyServices.remove({ id });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
