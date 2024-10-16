const express = require('express');
const router = express.Router();

// Route for the dashboard
router.get('/', (req, res) => {
    res.render('dashboard');  // Renders the 'dashboard.ejs' view
});

module.exports = router;
