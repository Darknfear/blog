import { Router } from "express";
const router = Router();

router.get("/check", async (req, res, next) => {
  return res.json({ success: true });
});

export default router;
