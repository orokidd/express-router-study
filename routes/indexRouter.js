const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("Welcome to the Bookstore API"));
router.get("/about", (req, res) => res.send("About this API"));
router.get("/contact", (req, res) => res.send("Contact us at contact@bookstore.com"));
router.post("/contact", (req, res) => res.send("Contact form submitted"));

module.exports = router;