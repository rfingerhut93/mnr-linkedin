import express from "express";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");


// Using mock API endpoint
server.use("/api", apiRouter);

// for root path
server.get(["/", "/contest/:contestId"], async (req, res) => {
  // await on serverRender
  // make serverRender aware of the request info (which URL is it for)
  const {initialMarkup, initialData} = await serverRender(req);
  res.render("index", {
    initialMarkup,
    initialData,
  });
});

server.listen(parseInt(config.PORT), config.HOST, () => {
  console.log(
    `Express is listening at ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`,
  );
});

