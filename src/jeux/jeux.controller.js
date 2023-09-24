const SelectionJeu = require("./catalogue.jeux.vr.model.js");

const getCatalogueJeux = async (req, res, next) => {
  const catalogueJeux = await SelectionJeu.find();
  res.json(catalogueJeux);
};

module.exports = { getCatalogueJeux };
