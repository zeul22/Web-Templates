import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createData } from "../controllers/dashboard.controller.js";

const router = Router();

// router.get("/users", verifyJWT, getUsers); //User Profile
// router.get("/users/update", verifyJWT, getUsers); //User Profile
// router.get("/users/remove", verifyJWT, getUsers); //User Profile

// // WORK
router.post("/analytics", verifyJWT, createData); //Work Create
// router.get("/work/", verifyJWT, getUsers); //Total Work
// router.post("/work/:id", verifyJWT, sendMessage); // Specific Work
// router.post("/charts", verifyJWT, sendMessage); // All Charts

// // MANAGEMENT
// router.get("/management",verifyJWT)

// // SALES
// router.get("/sales",verifyJWT)

export default router;
