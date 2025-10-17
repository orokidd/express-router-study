const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welcome to the Bookstore API"));
indexRouter.get("/about", (req, res) => res.send("About this API"));

module.exports = indexRouter;