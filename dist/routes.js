"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _CategoriaController = require('./app/controllers/CategoriaController'); var _CategoriaController2 = _interopRequireDefault(_CategoriaController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _auth = require('./app/midlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new _express2.default.Router();
const upload = _multer2.default.call(void 0, _multer4.default);

routes.post("/user", _UserController2.default.store);
routes.post("/sessions", _SessionController2.default.store);

routes.use(_auth2.default);

routes.put("/user", _UserController2.default.update);

routes.post("/categoria", _CategoriaController2.default.store);
routes.put("/categoria", _CategoriaController2.default.update);
routes.get("/categoria", _CategoriaController2.default.find);

routes.post("/files", upload.single("file"), (req, res) => {
  return res.json({ ok: true });
});
exports. default = routes;
