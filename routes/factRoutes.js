const express = require('express');
const factController = require("../controllers/factControllers");
require('dotenv').config();
const { auth } = require('express-oauth2-jwt-bearer');
const router = express.Router();

const AUTH0_DOMAIN = "dev-mhl2tc100hwj2hyo.auth0.com";
const API_IDENTIFIER = "https://thienan-api";

//Get all Method
router.get('/getAll', factController.getAll);

//Get by ID Method
router.get('/getOneById/:id', factController.getOneById);

//Get random fact
router.get('/getOneRandom', factController.getOneRandom);

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