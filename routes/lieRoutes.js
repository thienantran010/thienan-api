const express = require('express');
const lieController = require("../controllers/lieControllers");

const router = express.Router();

router.get('/getTwoLies', lieController.getTwoLies);

module.exports = router;