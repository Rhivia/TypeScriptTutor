"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    // Verify Session
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in.</div>\n        <a href=\"/logout\">Logout!</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <h1>Howd partner!</h1>\n        <span>Go to <a href=\"/login\">/login</a> to login!</span>\n      </div>\n    ");
    }
});
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // Mark the user as logged in
        req.session = { loggedIn: true };
        // Redirect to root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user!');
});
