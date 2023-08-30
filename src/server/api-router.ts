import express from "express";
import cors from "cors";

import { connectClient } from "./db";

const router = express.Router();
router.use(cors());
//middleware needed to parse req.body
router.use(express.json());

//Give info for contest list. (API endpoint)
router.get("/contests", async (req, res) => {
  const client = await connectClient();

  const contests = await client
    .collection("contests")
    .find()
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
      _id: 0,
    })
    .toArray();

  res.send({ contests });
});

//Give info for single contest (API endpoint)
router.get("/contest/:contestId", async (req, res) => {
  const client = await connectClient();

  const contest = await client
    .collection("contests")
    .findOne({ id: req.params.contestId });

  res.send({ contest });
});

// (API endpoint) Use post for side-effects
router.post("/contest/:contestId", async (req, res) => {
  const client = await connectClient();
  const {newNameValue} = req.body;
  const doc = await client
    .collection("contests")
    .findOneAndUpdate(
      { id: req.params.contestId },
      {
        $push: {
          // new name to be pushed to names array
          names: {
            //make id URL friendly by replacing spaces with -'s.
            id: newNameValue.toLowerCase().replace(/\s/g, '-'),
            name: newNameValue,
            timestamp: new Date(),
          }
        }
      },
      // returns new doc AFTER update
      {returnDocument: "after"},
    );

  res.send({updatedContest: doc.value});
});

// receive data
router.post("/contests/", async(req, res) => {
  const { contestName, categoryName, description} = req.body;

  const client = await connectClient();
  const doc = await client
    .collection("contests")
    .insertOne({
      id: contestName.toLowerCase().replace(/\s/g, '-'),
      contestName,
      categoryName,
      description,
      names: [],
    });
  
    const contest = await client
    .collection("contests")
    .findOne({ _id: doc.insertedId });

  res.send({ contest });
});

export default router;
