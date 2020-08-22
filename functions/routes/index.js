const admin = require('firebase-admin')

// var serviceAccount = require(process.env.GOOGLE_APPLICATIONS_CREDENTIALS);

var serviceAccount = require("../../fitto-ecadd-firebase-adminsdk-3wctg-aaa78a7651.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fitto-ecadd.firebaseio.com"
});


const db = admin.database();

const {
    Router
} = require('express');
const router = Router();

router.get('/', (req, res) => {
    // db.ref('contacts').once('value', (snapshot) => {
    //     data = snapshot.val();
    //     res.render('index', {
    //         contacts: data
    //     })
    // });
    res.render('layouts/dashboard');

})

router.get('/dashboard', (req, res) => {
    res.render('layouts/dashboard');
})

router.get('/icons', (req, res) => {
    res.render('layouts/icons');
})

router.get('/maps', (req, res) => {
    res.render('layouts/maps');
})
router.get('/map', (req, res) => {
    res.render('layouts/map');
})

router.get('/notifications', (req, res) => {
    res.render('layouts/notifications');
})

router.get('/rtl', (req, res) => {
    res.render('layouts/rtl');
})

router.get('/tables', (req, res) => {
    res.render('layouts/tables');
})

router.get('/typography', (req, res) => {
    res.render('layouts/typography');
})

router.get('/upgrade', (req, res) => {
    res.render('layouts/upgrade');
})
router.get('/user', (req, res) => {
    res.render('layouts/user');
})
router.get('/login', (req, res) => {
    res.render('layouts/login');
})
router.post('/login', (req, res) => {
    res.render('layouts/dashboard');
})


router.get('/forgot', (req, res) => {
    res.render('layouts/forgot');
})

router.get('/register', (req, res) => {
    res.render('layouts/register');
})

router.get('/reset', (req, res) => {
    res.render('layouts/reset');
})

router.get('/homepage', (req, res) => {
    res.render('layouts/homepage');
})

router.post('/new-contact', (req, res) => {
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('contacts').push(newContact);
    res.redirect('/');
});

router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});

module.exports = router;