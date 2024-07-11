const jwt = require('jsonwebtoken');
const User = require('../models/User');

function authenticate(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('Acesso negado');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Token inválido');
    }
}

async function isAdmin(req, res, next) {
    const user = await User.findById(req.user._id);
    if (user.role !== 'admin') {
        return res.status(403).send('Acesso negado');
    }
    next();
}

module.exports = { authenticate, isAdmin };
