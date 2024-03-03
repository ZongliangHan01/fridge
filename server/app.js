// const express = require("express");
// const accountRouter = require("./accounts/routes/accountRoutes.js");
// const fridgeRouter = require("./fridges/routes/fridgeRoutes.js");
import express from "express";
import fridgeRouter from "./fridges/routes/fridgeRoutes.js";
import accountRouter from "./accounts/routes/accountRoutes.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use("/", fridgeRouter);
app.use("/account", accountRouter);
