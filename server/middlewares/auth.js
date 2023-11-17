// 3 middlewares --- auth, isStudent(authorisation),isAdmin(authorisation)

const jwt = require("jsonwebtoken");
// require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    //extract JWT token
    //PENDING : other ways to fetch token
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    //verify the token
    try {
      const payload = jwt.verify(token, "Shhhhh");
      console.log(payload);
      //why this ?
      req.user = payload; //for getting role further.
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong, while verifying the token",
    });
  }
};
