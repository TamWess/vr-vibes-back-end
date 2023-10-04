const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  nombrePersonnes: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  //   rue: {
  //     type: String,
  //   },
  //   ville: {
  //     type: String,
  //     required: true,
  //   },
  //   codePostal: {
  //     type: String,
  //     required: true,
  //   },
  mail: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
  },
  precisions: {
    type: String,
  },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
