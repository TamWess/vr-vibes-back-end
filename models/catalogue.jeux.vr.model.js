const mongoose = require("mongoose");
const { Schema } = mongoose;

const SelectionJeuSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
  },
  {
    collection: "catalogue-jeux-vr",
  }
);

const SelectionJeu = mongoose.model("CatalogueJeu", SelectionJeuSchema);

module.exports = SelectionJeu;
