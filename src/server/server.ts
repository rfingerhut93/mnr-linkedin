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

server.get("/", async (req, res) => {
  // await on serverRender
  const initialMarkup = await serverRender();
  res.render("index", {
    initialMarkup,
  });
});

server.listen(parseInt(config.PORT), config.HOST, () => {
  console.log(
    `Express is listening at ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`,
  );
});
