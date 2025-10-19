// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
  { id: 4, name: "Dadang" },
  { id: 5, name: "Tono" },
  { id: 6, name: "Sucipto" },
];

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById };
