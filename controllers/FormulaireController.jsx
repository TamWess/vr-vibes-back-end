import Formulaire from "../models/FormulairePrive"

const postFormulaire = async (req, res, next) => {
	let formulaire = new Formulaire();
	formulaire.type = req.body.type;
	formulaire.nombrePersonnes = req.body.nombrePersonnes;
	formulaire.nom = req.body.nom;
	formulaire.prenom = req.body.prenom;
	formulaire.date = req.body.date;
	formulaire.rue = req.body.rue;
	formulaire.ville = req.body.ville;
	formulaire.codePostal = req.body.codePostal;
	formulaire.tel = req.body.tel;
	await formulaire.save();

	res.json(true);
};

export { postFormulaire } ;