import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/midlewares/auth";

const routes = new express.Router();
const upload = multer(multerConfig);

routes.post("/user", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.put("/user", UserController.update);

routes.post("/files", upload.single("file"), (req, res) => {
  return res.json({ ok: true });
});
export default routes;
