const express = require("express");
const wifeController = require("./wifeController");
const parentsController = require("./parentsController");
const sisterController = require("./sisterController");
const homeController = require("./homeController");

const routerApp = (app) => {
  const router = express.Router();
  app.use("", router);
  router.use("/", homeController);
  router.use("/wife", wifeController);
  router.use("/sister", sisterController);
  router.use("/parents", parentsController);
};

module.exports = routerApp;