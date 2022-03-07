
const express = require("express");
const { addItem, removeItem } = require("../controllers/cart-controllers");
const router = express.Router();

router.post("/addItem",addItem);
router.post("/removeItem",removeItem);

module.exports = router;