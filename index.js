const express = require("express");
require("dotenv").config();
const uploadRouter = require("./routes/uploadRouter");

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api", uploadRouter);

app.listen(PORT, () => {
  console.log(`app running on port : ${PORT }`);
});
