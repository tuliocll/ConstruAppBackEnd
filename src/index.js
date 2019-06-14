const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));

app.listen(3333);
