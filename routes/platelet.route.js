const express = require("express");
const router = express.Router()
const plateletController = require('../controllers/platelet.controller')

router.route('/')
.get(plateletController.getPlatelets)
.post(plateletController.createPlatelet)

module.exports = router;