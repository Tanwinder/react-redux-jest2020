const jwt = require("jsonwebtoken");

const secret = 'test';


const authMiddleware = async (req, res, next) => {
    console.log("req.headers---", req.headers.authorization);
    try {
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
        const isCustomSignIn = token && token.length < 500;

        let decoded;

        if(token && isCustomSignIn) {
            decoded = jwt.verify(token, secret);
            req.userId = decoded.id;
        }
        console.log('token middleware ---', token, req.userId);
        next();
    } catch (error) {
        console.log('error---midleware ---', error);
    }
}

module.exports = authMiddleware;