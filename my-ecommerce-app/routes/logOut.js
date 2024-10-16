const express = require('express');
const router = express.Router();

// Logout route to destroy the session
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Failed to log out');
        }
        res.redirect('/login');  // Redirect to login after logout
    });
});

module.exports = router;
