const express = require('express');
const router = express.Router();
const User = require('../model/User');  // Assuming this is your User model
const bcrypt = require('bcrypt');  // For password hashing
const session = require('express-session');

// Set up session handling
router.use(session({
  secret: 'your_secret_key',  // Use a secure key in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set `secure: true` when using HTTPS
}));

// GET route to render the login form
router.get('/login', (req, res) => {
    res.render('login');  // Render the login form
});

// POST route to handle login form submission
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            // User not found
            return res.status(401).render('login', { error: 'Invalid email or password' });
        }

        // Compare entered password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // Password does not match
            return res.status(401).render('login', { error: 'Invalid email or password' });
        }

        // If valid, create a session
        req.session.userId = user._id;
        req.session.role = user.role;
        
        // Redirect to dashboard (or another route)
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
});



router.get('/', (req, res) => {
    res.render('login');  // Ensure 'login.ejs' exists in your 'views' folder
});

module.exports = router;
