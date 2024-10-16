 const express = require('express');
 const mongoose = require('mongoose');
 const path = require('path');
 const session = require('express-session');

 // Initialize express app
const app = express();

// Set EJS as templating engine
 app.set('view engine', 'ejs');

 // Set views folder
 app.set('views', path.join(__dirname, 'views'));
 
 // Middleware to serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser to handle form submissions
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',  // Use a strong secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // If HTTPS, set to `true`
}));

// Middleware to protect routes
function checkAuth(req, res, next) {
    if (req.session.userId) {
        next();  // Proceed to the next middleware or route handler
    } else {
        res.redirect('/logIn');  // Redirect to login if not authenticated
    }
}

// Protect routes that require authentication
app.use('/dashboard', checkAuth);  // Dashboard requires authentication
app.use('/products', checkAuth);   // Products require authentication

const logOut = require('./routes/logOut');
app.use('/logout', logOut);


const dashboardRoutes = require('./routes/dashboard');
app.use('/dashboard', dashboardRoutes); 

const logIn = require('./routes/logIn');
app.use('/logIn', logIn);  // Use the product routes under /products

// Import product routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);  // Use the product routes under /products

 // Import and use index routes
 const indexRoutes = require('./routes/index');
 app.use('/', indexRoutes);  // Use index routes for root paths

// // MongoDB connection
 const dbURI = 'mongodb+srv://smr002:smr002@al-mcmxii.ynsro.mongodb.net/template_db?retryWrites=true&w=majority';
 mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
 const PORT = process.env.PORT || 7000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});

