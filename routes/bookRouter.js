const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});
bookRouter.post("/", (req, res) => res.send("Create a new book"));
bookRouter.put("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Edited a book with ID: ${bookId}`);
});

module.exports = bookRouter;
