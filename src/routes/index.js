const userService = require("./user_services");


fromKeyMapMakam = {

    namaAhliWaris: "Nama Ahli Waris",
    pekerjaanAhliWaris: "Pekerjaan Ahli Waris",
    alamatAhliWaris: "Alamat Ahli Waris",
    kelurahanAhliWaris: "Kelurahan Ahli Waris",
    kecamatanAhliWaris: "Kecamatan Ahli Waris",
    nomorTeleponAhliWaris: "No. Telepon Ahli Waris",
    namaJenazah: "Nama Jenazah",
    jenisKelamin: "Jenis Kelamin Jenazah",
    agamaJenazah: "Agama Jenazah",
    alamatJenazah: "Alamat Jenazah",
    kelurahanJenazah: "Kelurahan Jenazah",
    kecamatanJenazah: "Kecamatan Jenazah",
    kabkotaJenazah: "Kab/Kota Jenazah",
    tanggalMeninggal: "Tanggal Meninggal",
    tanggalDimakamkan: "Tanggal Dimakamkan",
    lokasi: "Lokasi",
    blok: "Blok",
    perpetaanNomor: "Perpetaan Nomor",
    luas: "Luas",
    isSuratPemeriksaanMayat: "Surat Pemerisaan Mayat",
    isSuratRumahSakit: "Surat Rumah Sakit",
    isSuratLurahOrCapil: "Surat Lurah/Catatan Sipil",
    issuratKematian: "Surat Kematian",
    isVerifikasi: "Sudah Terverifikasi",
    keteranganLainnya: "Keterangan Lainnya",
    lastEdit: "Edit Terakhir"
};


fromKeyMapJuri = {
    namaJuruMakam: "Nama Juru Makam",
    blokJuruMakam: "Blok Juru Makam",
    alamatJuruMakam: "Alamat Juru Makam",
    noTeleponJuruMakam: "No. Telepon Juru Makam",
    lastEdit: "Edit Terakhir"
};


listdataMakam = [
    'namaAhliWaris',
    'pekerjaanAhliWaris',
    'alamatAhliWaris',
    'kelurahanAhliWaris',
    'kecamatanAhliWaris',
    'nomorTeleponAhliWaris',
    'namaJenazah',
    'jenisKelamin',
    'agamaJenazah',
    'alamatJenazah',
    'kelurahanJenazah',
    'kecamatanJenazah',
    'kabkotaJenazah',
    'tanggalMeninggal',
    'tanggalDimakamkan',
    'lokasi',
    'blok',
    'perpetaanNomor',
    'luas',
    'isSuratPemeriksaanMayat',
    'isSuratRumahSakit',
    'isSuratLurahOrCapil',
    'issuratKematian',
    'isVerifikasi',
    'keteranganLainnya',
    'lastEdit'
];

listdataJuri = [
    'namaJuruMakam',
    'alamatJuruMakam',
    'noTeleponJuruMakam',
    'blokJuruMakam',
    'lastEdit'
];



const {
    Router
} = require("express");
const passport = require("passport");
const router = Router();

router.get("/", (req, res) => {
    res.render("layouts/homepagenew.ejs");
});

router.get("/artikelsingle", (req, res) => {
    res.render("layouts/blog-single.ejs");
});


router.get("/pricing", (req, res) => {
    res.render("layouts/pricing.ejs");
});


router.get("/hasilcarileluhur", (req, res) => {
    res.render("layouts/hasilcarileluhur.ejs");
});


router.get("/artikel", (req, res) => {
    res.render("layouts/blog.ejs");
});
router.get("/tilik", (req, res) => {
    res.render("layouts/tilik.ejs");
});
router.get("/carileluhur", (req, res) => {
    res.render("layouts/carileluhur.ejs");
});
router.get("/statistik", (req, res) => {
    res.render("layouts/about.ejs");
});
router.get("/kontakkami", (req, res) => {
    res.render("layouts/contact.ejs");
});

router.get("/jurukunci", (req, res) => {
    res.render("layouts/jurukunci.ejs");
});

router.get("/signOut", (req, res) => {
    // userService.db.ref('contacts').once('value', (snapshot) => {
    //     data = snapshot.val();
    //     res.render('index', {
    //         contacts: data
    //     })
    // });
    res.render("layouts/homepagenew.ejs");
});
router.get("/dashboard", checkAuthenticated, (req, res) => {
    res.render("layouts/dashboard.ejs");
});

router.get("/icons", checkAuthenticated, (req, res) => {
    res.render("layouts/icons.ejs");
});

router.get("/maps", checkAuthenticated, (req, res) => {
    res.render("layouts/maps.ejs");
});
router.get("/map", checkAuthenticated, (req, res) => {
    res.render("layouts/map.ejs");
});

router.get("/notifications", checkAuthenticated, (req, res) => {
    res.render("layouts/notifications.ejs");
});

router.get("/rtl", checkAuthenticated, (req, res) => {
    res.render("layouts/rtl.ejs");
});

router.get("/tables", checkAuthenticated, (req, res) => {
    res.render("layouts/tables.ejs");
});

router.get("/typography", checkAuthenticated, (req, res) => {
    res.render("layouts/typography.ejs");
});

router.get("/upgrade", checkAuthenticated, (req, res) => {
    res.render("layouts/upgrade.ejs");
});
router.get("/user", checkAuthenticated, (req, res) => {
    res.render("layouts/user.ejs");
});
router.get("/test", async (req, res) => {
    res.render("layouts/test.ejs");
});

router.get("/pengaturan", checkAuthenticated, (req, res) => {
    var dataMakam = userService.db.collection('dataDashboard').doc('biayaSewa');
    console.log(dataMakam.get().then(
        function (querySnapshot) {
            var data = querySnapshot.data();
            console.log(data)
            res.render("layouts/pengaturan.ejs", {
                datamasukkan: data,
                header: null
            });
        }
    ));
});

router.get("/forgot", (req, res) => {
    res.render("layouts/forgot.ejs");
});


router.get("/reset", (req, res) => {
    res.render("layouts/reset.ejs");
});

router.get("/homepage", (req, res) => {
    res.render("layouts/homepagenew.ejs");
});
router.post("/hapusDataMakam", (req, res) => {
    // Create a document reference
    var dataMakam = userService.db.collection('dataMakam').where('namaJuruMakam', '==', 'Nama Lengkap');
    dataMakam.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            doc.ref.delete();
        });
    });
    // Remove the 'capital' field from the document
});
router.post("/hapusDataJuruMakam", (req, res) => {
    // Create a document reference
    var dataMakam = userService.db.collection('dataJuruKunci').where('noTeleponJuruMakam', '==', req.body['No. Telepon Juru Makam']);
    dataMakam.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.data())
            doc.ref.delete();
            res.redirect('/pengaturan?info=berhasil')

        });
    });
    // Remove the 'capital' field from the document
});



router.post("/addDataMakam", (req, res) => {
    var data = req.body;

    data['lastEdit'] = userService.serverTimestamp().toString();
    // Add a new document in collection "cities" with ID 'LA'
    userService.db
        .collection("dataMakam")
        .doc(data.namaJenazah + "_" + data.perpetaanNomor)
        .set(data);
    res.redirect("/tables");
});

router.post("/editDataMakam", (req, res) => {
    var data = req.body;
    data['lastEdit'] = userService.serverTimestamp().toString();

    // Add a new document in collection "cities" with ID 'LA'
    userService.db
        .collection("dataMakam")
        .doc(data.namaJenazah + "_" + data.perpetaanNomor)
        .update(data);
    res.redirect("/pengaturan?info=Berhasil Edit Data Makam");
});


router.post("/addDataJuruKunci", (req, res) => {
    var data = req.body;
    data['lastEdit'] = userService.serverTimestamp();

    // Add a new document in collection "cities" with ID 'LA'
    userService.db
        .collection("dataJuruKunci")
        .doc(data.namaJuruMakam + "_" + data.noTeleponJuruMakam)
        .set(data);
    res.redirect("/pengaturan?info=Berhasil Add Data Juru Kunci");
});
router.post("/editDataJuruKunci", (req, res) => {
    var data = req.body;
    data['lastEdit'] = userService.serverTimestamp().toString();
    // Add a new document in collection "cities" with ID 'LA'
    userService.db
        .collection("dataJuruKunci")
        .doc(data.namaJuruMakam + "_" + data.noTeleponJuruMakam)
        .set(data);
    res.redirect("/pengaturan?info=Berhasil Edit Data Juru Kunci");
});
router.post("/editDataBiaya", (req, res) => {
    var data = req.body;
    // data['lastEdit'] = new Date.now().toLocaleDateString();
    // Add a new document in collection "cities" with ID 'LA'
    console.log(data);
    data['lastEdit'] = userService.serverTimestamp();
    userService.db
        .collection("dataDashboard")
        .doc('biayaSewa')
        .set(data);

    res.redirect("/pengaturan?info=Berhasil Edit Data Biaya");
});

router.get("/getDataMakam", async (req, res) => {
    const citiesRef = userService.db.collection("dataMakam");
    const snapshot = await citiesRef.get();
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    var obj = {
        rows: [],
    };
    snapshot.forEach((doc) => {
        let map = new Map();
        listdataMakam.forEach((x) => {
            // console.log(x)
            // console.log(fromKeyMapMakam[x], doc.data()[x])
            map.set(fromKeyMapMakam[x], doc.data()[x]);
        });
        const mapakhir = Object.fromEntries(map);
        obj.rows.push(mapakhir);
    });
    console.log(obj.rows[0]);
    res.send(obj);
});
router.get("/getDataJuri", async (req, res) => {
    const citiesRef = userService.db.collection("dataJuruKunci");
    const snapshot = await citiesRef.get();
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    var obj = {
        rows: [],
    };
    snapshot.forEach((doc) => {
        let map = new Map();
        listdataJuri.forEach((x) => {
            if (x == 'lastEdit') {
                try {
                    console.log(doc.data()[x].toDate().toString());
                    map.set(fromKeyMapJuri[x], doc.data()[x].toDate().toString());
                } catch {}
            } else {
                map.set(fromKeyMapJuri[x], doc.data()[x]);

            }
        });


        const mapakhir = Object.fromEntries(map);

        obj.rows.push(mapakhir);
    });
    res.send(obj);
});
router.get("/delete-contact/:id", (req, res) => {
    userService.db.ref("contacts/" + req.params.id).remove();
    res.redirect("/");
});


router.get("/", checkAuthenticated, (req, res) => {
    res.render("index.ejs", {
        name: req.user.name,
    });
});

router.get("/check", checkNotAuthenticated, (req, res) => {
    res.locals = {
        title: 'Exasdasdsae',
        message: 'This is a message'
    };
    res.render("layouts/view.ejs");
});
router.get("/login", checkNotAuthenticated, (req, res) => {

    res.render("layouts/login.ejs");

});
router.post(
    "/login",
    checkNotAuthenticated,
    function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            if (!user) {
                return res.redirect('/login?info=' + info.message)
            }

            req.login(user, loginErr => {
                if (loginErr) {
                    return next(loginErr);
                }
                return res.redirect('/dashboard');
            });
        })(req, res, next);
    }


);
router.get("/register", checkNotAuthenticated, (req, res) => {
    res.render("/layouts/register.ejs");
});

router.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = req.body.password;
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        res.redirect("/login");
    } catch {
        res.redirect("/register");
    }
});
router.delete("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
}
module.exports = router;