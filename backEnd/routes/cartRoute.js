
const express = require("express");
const { addItem, removeItem, toggleCart, checkCart, addItem2, removeItem2, toggle2, create2 } = require("../controllers/cart-controllers");
const router = express.Router();

router.post("/addItem",addItem);
router.post("/removeItem",removeItem);
router.post("/toggle",toggleCart);
router.post("/create",checkCart);
router.post("/addItem2",addItem2);
router.post("/removeItem2",removeItem2);
router.post("/toggle2",toggle2);
router.post("/create2",create2);

module.exports = router;