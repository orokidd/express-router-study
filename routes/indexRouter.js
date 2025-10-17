const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welcome to the Bookstore API"));
indexRouter.get("/about", (req, res) => res.send("About this API"));
indexRouter.get("/contact", (req, res) => res.send("Contact us at contact@bookstore.com"));
indexRouter.post("/contact", (req, res) => res.send("Contact form submitted"));

module.exports = indexRouter;