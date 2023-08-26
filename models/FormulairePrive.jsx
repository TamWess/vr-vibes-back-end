import mongoose from "mongoose";
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
		required: false,
	},
	rue: {
		type: String,
		required: true,
	},
	ville: {
		type: String,
		required: true,
	},
	codePostal: {
		type: String,
		required: true,
	},
	tel: {
		type: Number,
		required: false
	}, 
	
		collection: "formulaires",
});

const Formulaire = mongoose.model("Formulaire", FormulaireSchema);

export default Formulaire