const Router = require("express").Router;

const SelectionJeu = require("./catalogue.jeux.vr.model.js");

const jeuxRouter = new Router();

// Pour une auto completion intelligente des paramètres du gestionnaire de route
/** @type {import('express').Handler} */
const getCatalogueJeux = async (req, res) => {
  // Y a-t-il une query string pour une recherche ?
  const search = req.query.q;
  const options = {};
  if (search) {
    // Si oui, on ajoute une condition à la requête
    options.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  const catalogueJeux = await SelectionJeu.find(options);
  res.json(catalogueJeux);
};

jeuxRouter.get("", getCatalogueJeux);

/** @type {import('express').Handler} */
const getJeu = async (req, res) => {
  const id = req.params.jeuId;
  const jeu = await SelectionJeu.findById(id);
  res.json(jeu);
};

jeuxRouter.get("/:jeuId", getJeu);

// pour creer un jeu
// jeuxRouter.post("", createGame )

module.exports = jeuxRouter;
