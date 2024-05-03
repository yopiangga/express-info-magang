import express from "express";
import * as userServices from "../services/UserServices";
import { UserRole } from "@prisma/client";
import { JWTRequest } from "../middleware/jwtAuth";

export const router = express.Router();

router.get("/", async (req, res, next) => {
    const userId = (req as JWTRequest).user.id;
  
    try {
      const user = await userServices.getOne({ id: userId });
      const { password, ...userWithoutPassword } = user as {
        id: string;
        email: string;
        name: string | null;
        password: string;
        role: UserRole;
        createdAt: Date;
        updatedAt: Date;
        companyId: string | null;
      };
  
      res.json(userWithoutPassword);
    } catch (error) {
      next(error);
    }
  });
