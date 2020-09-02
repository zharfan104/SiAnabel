//     app.use(passport.initialize());
// app.use(passport.session());

// app.use(require("express-session")({
//     secret: "Rusty is a dog",
//     resave: false,
//     saveUninitialized: false
// }));
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // Showing secret page
// app.get("/secret", isLoggedIn, function (req, res) {
//     res.render("secret");
// });

// // Showing register form
// app.get("/register", function (req, res) {
//     res.render("register");
// });

// // Handling user signup
// app.post("/register", function (req, res) {
//     var username = req.body.username
//     var password = req.body.password
//     User.register(new User({
//             username: username
//         }),
//         password,
//         function (err, user) {
//             if (err) {
//                 console.log(err);
//                 return res.render("register");
//             }

//             passport.authenticate("local")(
//                 req, res,
//                 function () {
//                     res.render("secret");
//                 });
//         });
// });

// //Showing login form
// app.get("/login", function (req, res) {
//     res.render("login");
// });

// //Handling user login
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/secret",
//     failureRedirect: "/login"
// }), function (req, res) {});

// //Handling user logout
// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }





// router.post("/signup", async (req, res) => {
//     const {
//         email,
//         password
//     } = req.body;
//     try {
//         const user = await userService.addUser(email, password);
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(401).json({
//             error: err.message,
//         });
//     }
// });
// router.post("/login", passport.authenticate('local', {
//     successRedirect: '/tables',
//     failureRedirect: '/login',
//     failureFlash: true
// }));
// router.get("/test", async (req, res) => {
//     try {
//         const user = await userService.authenticate(
//             "zharfan.akbar104@gmail.com",
//             "kaskuse"
//         );
//         res.json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(401).json({
//             error: err.code,
//         });
//     }
// });