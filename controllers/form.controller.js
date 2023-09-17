const nodemailer = require("nodemailer");
const Reservation = require("../models/form-private.model.js");

const createReservation = async (req, res, next) => {
  const {
    // Récupérer les données nécessaires et suffisantes pour éviter les injections NoSQL
    type,
    nombrePersonnes,
    nom,
    prenom,
    date,
    rue,
    ville,
    codePostal,
    mail,
    tel,
    precisions,
  } = req.body;

  try {
    let formulaire = new Reservation({
      type,
      nombrePersonnes,
      nom,
      prenom,
      date,
      rue,
      ville,
      codePostal,
      mail,
      tel,
      precisions,
    });

    await formulaire.save();
  } catch (error) {
    console.log({
      // TODO: Utiliser une bibliothèque de log (Winston)
      body: JSON.stringify(req.body),
    });
    res.status(500).json({
      err: 1,
      message:
        "Réservation impossible dû à une erreur de notre part. Veuillez nous contacter",
    });
    return;
  }
  // console.log(formulaire);

  try {
    const nodemailerConfig = {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.nodeMailerMail,
        pass: process.env.nodeMailerPassword,
      },
    };
    const transport = nodemailer.createTransport(nodemailerConfig);
    const emailData = {
      to: mail,
      from: process.env.nodeMailerMail,
      subject: "vr-vibes nouvelle demande client",
      html: `<p>Test email</p>`,
      text: "Premièreligneimportante",
    };

    await transport.sendMail(emailData);
    const myEmailData = {
      to: process.env.nodeMailerMail,
      from: process.env.nodeMailerMail,
      subject: "vr-vibes nouvelle demande client",
      text: `
			Type: ${type}
			Nombre de personnes: ${nombrePersonnes}
			Nom: ${nom}
			Prenom: ${prenom}
			Date: ${date}
			Rue: ${rue}
			Ville: ${ville}
			Code postal: ${codePostal}
			Mail: ${mail}
			Tel: ${tel}
			Precisions: ${precisions}
			`,
    };

    await transport.sendMail(myEmailData);
    res.status(201).json({
      message: `Votre demande de réservation a bien été prise en compte. Un email vous a été envoyé à ${mail}.`,
    });
  } catch (error) {
    console.error({
      email: mail,
      error,
    });
    res.status(500).json({
      err: 500,
      message:
        "Votre demande de réservation a bien été prise en compte, malheureusement, nous n’avons pas pu vous envoyer de mail.",
    });
  }
};

module.exports = { createReservation };