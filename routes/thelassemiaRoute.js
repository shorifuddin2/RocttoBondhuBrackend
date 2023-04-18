const express = require("express");
const {createThelassemia, donerData} = require("../controllers/thelassemiaController");
const {thelassemiaMiddleware, thelassemiaDonerMiddleware} = require("../middlewares/thelassemiaMiddleware");

const router = express.Router();

router.post("/", thelassemiaMiddleware, createThelassemia);
router.post("/api/doner",thelassemiaDonerMiddleware, donerData);

module.exports = router;
