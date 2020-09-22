const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const bcrypt = require('bcrypt')
const passport = require("passport");
const session = require("express-session");
const methodOverride = require("method-override");
const initializePassport = require("../src/routes/passport-config");
const app = express();
var expressLayouts = require('express-ejs-layouts');
// const minify = require('@node-minify/core');
// const clss = require(' @node-minify/clean-css ');
// const uglifyjs = require('@node-minify/uglify-js');
// const htmlmin = require('@node-minify/html-minifier');

// minify({
//     compressor: clss,
//     input: './**/*.css',
//     output: './**/*.js',
//     callback: function (err, min) {}
// });

// // Using UglifyJS
// minify({
//     compressor: uglifyjs,
//     input: './**/*.js',
//     output: './**/*.js',
//     callback: function (err, min) {}
// });

// // Using Promise
// var promise = minify({
//     compressor: htmlmin,
//     input: './**/*.js',
//     output: './**/*.js'
// });

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set('layout extractScripts', true);
app.set('layout extractStyles', true)

app.use(expressLayouts);
app.set('layout', 'layouts/layouts.ejs');

// middlewares
app.use(morgan("dev"));

const users = [];

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(require('body-parser').urlencoded({
    extended: true
}));

initializePassport(
    passport
);
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Routes

app.use(require("./routes/index"));
app.use(function (req, res) {
    res.status(404).render("layouts/notfound.ejs");
});
module.exports = app;