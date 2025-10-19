const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("All books"));
router.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});
router.post("/", (req, res) => res.send("Create a new book"));
router.put("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Edited a book with ID: ${bookId}`);
});

module.exports = router;
