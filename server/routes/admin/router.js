const express = require('express');
const adminRouter = new express.Router();
const session = require('express-session');

adminRouter.use(session({
    secret: process.env.JWT_SECRET,
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        path: '/',
    },
    // resave: true,
    // saveUninitialized: true,
}));

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

adminRouter.get('/api/auth/session', (req, res) => {
    const isAdmin = req.session.isAdmin || false;
    res.json({ isAdmin, sessionId: req.sessionID });
});

adminRouter.post('/api/adminLogin', (req, res) => {
    const { password } = req.body;
    console.log(password);
    if (password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        console.log("is admin 1" + req.session.isAdmin);
        res.status(201).json({ success: true });
        console.log("is admin 2" + req.session.isAdmin);
    } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
    }
});

adminRouter.get('/api/adminLogout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Error logging out' });
        } else {
            res.json({ success: true });
        }
    });
});

adminRouter.get('/api/checkAuth', (req, res) => {
    if (req.session.isAdmin) {
        console.log("is admin 3" + req.session.isAdmin);
        res.status(200).json({ isAdmin: true });
        console.log("is admin 4" + req.session.isAdmin);
    } else {
        res.status(403).json({ isAdmin: false });
    }
});

adminRouter.get('/api/admin', (req, res) => {
    if (req.session.isAdmin) {
        res.send('Admin Dashboard');
    } else {
        res.redirect('/');
    }
});

module.exports = adminRouter;