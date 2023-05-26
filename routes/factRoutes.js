const express = require('express');
const cors = require('cors');
const factController = require("../controllers/factControllers");
require('dotenv').config();
const { auth } = require('express-oauth2-jwt-bearer');
const router = express.Router();

//Get all Method
router.get('/getAll', cors(), factController.getAll);

//Get by ID Method
router.get('/getOneById/:id', cors(), factController.getOneById);

//Get random fact
router.get('/getOneRandom', cors(), factController.getOneRandom);

const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});
  
// enforce on endpoints that edit the database
router.use(jwtCheck);

//Post Method
router.post('/post', factController.post);

//Update by ID Method
router.patch('/updateById/:id', factController.updateById);

//Delete by ID Method
router.delete('/deleteById/:id', factController.deleteById);

module.exports = router;