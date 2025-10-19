const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController")

const router = Router();

router.get("/", (req, res) => res.send("All authors"));
router.get("/:authorId", getAuthorById);

module.exports = router;
