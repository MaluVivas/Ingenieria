import { Router } from "express";
//import controller
import { register, login } from '../controller/authController';
//import validation
import { validateBody } from "../middleware/validations";
//import schema
import { insertUsersSchema } from "../db/schema";

import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must have at least 6 characters")
});

const router = Router();

router.post("/login", validateBody(loginSchema), login);

router.post("/register", validateBody(insertUsersSchema), register);

export default router;