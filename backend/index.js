const express = require("express");
const cors = require("cors"); // call the server from another origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
}); // temporal auth 

app.listen(3001);