const checkJwt = (req, res, next) => {
  //Vérifier que l'utilisateur est authentifié
  //Vérifier que le token est présent
  const token = req.headers.authorization.replace("Bearer", "");
  //Vérifier que le token est valide
  checkAccessToken(token);
  try {
    const decoded = checkAccessToken(token);

    if (!decoded) {
      throw new Error();
    }
  } catch (error) {
    return res
      .status(401)
      .json({
        message:
          "Vous devez être connecté pour accéder à la liste des formulaires",
      });
  }
  next();
};

module.exports = checkJwt
