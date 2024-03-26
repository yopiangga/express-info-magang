import express from "express";
import * as roleInternServices from "../services/RoleInternServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const roleInterns = await roleInternServices.getAll({ page, limit });
    res.json(roleInterns);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const roleIntern = await roleInternServices.getOne({ id });
    res.json(roleIntern);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { title } = req.body;

  try {
    const roleIntern = await roleInternServices.create({ title });
    res.json(roleIntern);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { title } = req.body;

  try {
    const roleIntern = await roleInternServices.update({ id, title });
    res.json(roleIntern);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await roleInternServices.remove({ id });
    res.json({ message: "Role Intern deleted successfully" });
  } catch (error) {
    next(error);
  }
});
