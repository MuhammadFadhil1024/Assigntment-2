const {verifyToken} = require("../helper/jwt")
const fs = require('fs');
const data = require('../users.json')

const authentication = (req, res, next) => {
    try {
        const access_token = req.headers.access_token;

        console.log(access_token);

        if (!access_token) {
            throw {
                code: 401,
                message: "Access token is required"
            }
        }

        const decoded = verifyToken(access_token)
        const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
        const user = users.find((user) => user.email === decoded.email)
        console.log(user);

        if (!user) {
            return res.status(403).json({ message: 'User not found' });
        }
        return next()
    } catch (error) {
        res.status(error?.code || 500).json(error);
        console.log(error)
    }
}

module.exports = authentication;