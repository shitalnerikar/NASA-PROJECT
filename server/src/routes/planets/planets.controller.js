const { getAllPlanets } = require("../../models/planets.model");
async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
// mouse n no adati hve
//h

//thank me later
//haa
//by