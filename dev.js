const express = require("express");
const path = require("path");
const chokidar = require("chokidar");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

chokidar.watch(__dirname).on("change", (filePath) => {
  console.log(`File changed: ${filePath}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
