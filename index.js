const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const port = 3000;

app.get("/health", (req, res) => {
  res.json({
    message: "ok",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
