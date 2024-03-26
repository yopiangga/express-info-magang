import express from "express";
import * as authServices from "../services/AuthServices";

export const router = express.Router();

router.post("/sign-in", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await authServices.signIn({ email, password });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/sign-up", async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const user = await authServices.signUp({ email, password, name });
    res.json(user);
  } catch (error) {
    next(error);
  }
});
