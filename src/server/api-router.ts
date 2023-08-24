// Mock API endpoint ??

import express from "express";
import cors from "cors";

// creates router object to include on server
const router = express.Router();
router.use(cors());

// bring in test data
import testData from "../test-data.json"

router.get("/contests", (req, res) => {
    // get the data from MongoDB
    res.send(testData);
})

export default router;