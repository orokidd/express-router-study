const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("All authors"));
router.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = router;
