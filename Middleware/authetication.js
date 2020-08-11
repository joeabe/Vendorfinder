const jwt = require('jsonwebtoken')

function Authentication(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).json({ msg: 'No token, authorization denied' });
    jwt.verify(token,'my_secret_key', (err, SignInUser)=> {
        if (err) return res.sendStatus(403)
        req.userData = SignInUser
        next()
    } )
}
module.exports = Authentication;

