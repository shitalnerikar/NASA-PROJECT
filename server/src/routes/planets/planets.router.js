const express = require("express");

const { 
    httpGetAllPlanets, 
} = require("../planets/planets.controller");

const planetsRouter = express.Router();
// console.log(httpGetAllPlanets)
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;

