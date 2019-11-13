const jwt = require('jsonwebtoken');  //1; npm i jsonwebtoken

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || 'How many roads must a man walk down?';

    //check that the token is valid
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        //bad panda, token tampered with
        res.status(401).json({ message: 'invalid credentials!' })
      } else {
        req.decodedJwt = decodedToken;
        // console.log(decodedToken);
        next();
      }
    });


  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
