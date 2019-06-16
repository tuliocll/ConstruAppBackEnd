const express = require("express");
const cores = require("cores");

const app = express();

app.use(cores());

app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));

app.listen(3333);
