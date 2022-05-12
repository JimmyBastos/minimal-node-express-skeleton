const { Router } = require("express");

const authController = require("./controllers/AuthController");
const authValidator = require("./validators/AuthValidator");
const authMiddleware = require("./middlewares/AuthMiddleware");

const coffeesController = require("./controllers/CoffeesController");

const router = new Router();

router.post("/login", authValidator.create(), authController.login);

router.get("/coffees", authMiddleware, coffeesController.index);

module.exports = router;
