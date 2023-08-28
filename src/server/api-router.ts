// Mock API endpoint ??

import express from "express";
import cors from "cors";
import { connectClient } from "./db";

// creates router object to include on server
const router = express.Router();
router.use(cors());


router.get("/contests", async (req, res) => {
    // get the data from MongoDB
    const client = await connectClient();

    // get data from connected Mongo client:
    // returns an array of contests
    const contests = await client.collection("contests").find().project({
        // tells mongodb to only include these fields.
        id: 1,
        categoryName: 1,
        contestName: 1,
    }).toArray();
    res.send({contests: contests});
})

export default router;