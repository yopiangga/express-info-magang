import express from "express";
import * as homeServices from "../services/HomeServices";

export const router = express.Router();

router.get("/statistics", async (req, res, next) => {
  try {
    const response =  await homeServices.getStatistics();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.get("/counts", async (req, res, next) => {
  try {
    const response =  await homeServices.getCounts();
    res.json(response);
  } catch (error) {
    next(error);
  }
});