import express from "express";
import generateSummary from "../services/openrouter.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const text = req.body.text;

    if (!text || !text.trim()) {
        return res.json({ summary: "❌ No text provided" });
    }

    const summary = await generateSummary(text);
    res.json({ summary });
});

export default router;
