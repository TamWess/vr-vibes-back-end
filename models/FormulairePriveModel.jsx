const mongoose = require ("mongoose");
const { Schema } = mongoose;

const FormulaireSchema = new Schema ({
	type: {
		type: String,
		required: true
	},
	nombrePersonnes:{
		type: String,
		required: true,
	},
	nom: {
		type: String,
		required: true,
	},
	prenom: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	rue: {
		type: String,
		// required: false,
	},
	ville: {
		type: String,
		required: true,
	},
	codePostal: {
		type: String,
		required: true,
	},
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

const Formulaire = mongoose.model("formulaireprivee", FormulaireSchema);

module.exports = Formulaire