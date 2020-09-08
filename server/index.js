const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/time", require("./controller/time.controller"));
app.use("/api", require("./controller/projects.controller"));
app.use("/api", require("./controller/twitter.controller"));

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: `Welcome to the Portfolio server!` });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

app.listen(PORT, () =>
  console.log(`portfolio-server is running on localhost:${PORT}`)
);
