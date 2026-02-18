const express = require("express");
const app = express();
app.use(express.json());

const node = [];

app.post("/back", (req, res) => {
  node.push(req.body);
  console.log(req.body);
  res.status(201).json({
    message: "node create successfully",
  });
});

app.get("/back", (req, res) => {
  res.status(200).json({
    node: node,
  });
});

app.patch("/back/:mama", (req, res) => {
  node[req.params.mama].lastname = req.body.lastname;
  res.status(201).json({
    message: "modified resource",
  });
});

app.delete("/back/:index", (req, res) => {
  delete node[req.params.index];
  res.status(200).json({
    message: "Node deleted successfully",
  });
});
module.exports = app;
