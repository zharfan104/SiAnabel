const admin = require('firebase-admin')

// var serviceAccount = require(process.env.GOOGLE_APPLICATIONS_CREDENTIALS);

var serviceAccount = require("../../fitto-ecadd-firebase-adminsdk-3wctg-aaa78a7651.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fitto-ecadd.firebaseio.com"
});


const db = admin.firestore();

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

router.post('/addData', (req, res) => {
    const data = {
        namaLengkapJenazah: req.body.namaLengkapJenazah,
        tanggalMeninggal: req.body.tanggalMeninggal,
        tanggalKubur: req.body.tanggalKubur,
        jenisKelamin: req.body.jenisKelamin,
        namaBapak: req.body.namaBapak,
        namaIbu: req.body.namaIbu,
        namaIstriSuami: req.body.namaIstriSuami,
        blok: req.body.blok,
        bagian: req.body.bagian,
        petak: req.body.petak,
        namaLengkapPenanggungJawab: req.body.namaLengkapPenanggungJawab,
        hubunganDenganPenanggungJawab: req.body.hubunganDenganPenanggungJawab,
        alamatPenanggungJawab: req.body.alamatPenanggungJawab,
        nomorhpPenanggungJawab: req.body.nomorhpPenanggungJawab,
        kelurahanPenanggungJawab: req.body.kelurahanPenanggungJawab,
        kecamatanPenanggungJawab: req.body.kecamatanPenanggungJawab,
    };
    // Add a new document in collection "cities" with ID 'LA'
    db.collection('dataMakam').doc(data.namaLengkapJenazah + "_" + data.bagian).set(data);
    res.redirect('/');
});
router.get('/getData', async (req, res) => {
    const citiesRef = db.collection('dataMakam');
    const snapshot = await citiesRef.get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }
    var obj = {
        rows: []
    };
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        obj.rows.push(doc.data());

    });


    res.send(obj);
});

router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});

module.exports = router;