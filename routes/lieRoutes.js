const express = require('express');
const cors = require('cors');
const lieController = require("../controllers/lieControllers");

const router = express.Router();

router.get('/getTwoLies', cors(), lieController.getTwoLies);

module.exports = router;