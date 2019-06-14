const express = require("express");
const multer = require("multer");
const UserController = require("./controllers/UserController");
const uploadConfig = require("./config/upload");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/user", UserController.index);
routes.post("/user", UserController.store);

routes.post("/produto", UserController.store);

module.exports = routes;
