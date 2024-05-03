import express from "express";
import * as mapServices from "../services/MapServices";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const companies = await mapServices.getCompanies();
    res.json(companies);
  } catch (error) {
    next(error);
  }
});