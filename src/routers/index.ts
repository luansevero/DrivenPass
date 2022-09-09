import { Router } from "express";
import authRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import safetyNoteRouter from "./safetyNoteRouter";

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safetyNoteRouter);

export default router;