import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Import summary route
import summaryRoute from "./api/summary.js";
app.use("/api/summary", summaryRoute);

// Root test
app.get("/", (req, res) => {
    res.send("SUMMARY BACKEND WORKING!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Running on port", PORT));
