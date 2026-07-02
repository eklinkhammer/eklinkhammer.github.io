const express = require("express");
const path = require("path");
const chokidar = require("chokidar");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

// For clean URLs in dev: /projects, /honk, /blog, /blog/* -> serve index.html
app.get(/^\/(projects|honk|blog|blog\/.+)$/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

chokidar.watch(__dirname, { ignored: /node_modules/ }).on("change", (filePath) => {
  console.log(`File changed: ${filePath}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
