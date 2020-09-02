// var serviceAccount = require(process.env.GOOGLE_APPLICATIONS_CREDENTIALS);


fromKeyMap = {
    namaLengkapJenazah: "Nama Jenazah",
    tanggalMeninggal: "Tanggal Meninggal",
    tanggalKubur: "Tanggal Kubur",
    jenisKelamin: "Jenis Kelamin",
    namaBapak: "Nama Bapak",
    namaIbu: "Nama Ibu",
    namaIstriSuami: "Nama Istri/Suami",
    blok: "Blok",
    bagian: "Bagian",
    petak: "Petak",
    namaLengkapPenanggungJawab: "Nama Penanggung Jawab",
    hubunganDenganPenanggungJawab: "Hubungan PJ",
    nomorhpPenanggungJawab: "Nomor Telepon PJ",
    alamatPenanggungJawab: "Alamat PJ",
    kelurahanPenanggungJawab: "Kelurahan PJ",
    kecamatanPenanggungJawab: "Kecamatan PJ",
};
listdariobjek = [
    "namaLengkapJenazah",
    "tanggalMeninggal",
    "tanggalKubur",
    "jenisKelamin",
    "namaBapak",
    "namaIbu",
    "namaIstriSuami",
    "blok",
    "bagian",
    "petak",
    "namaLengkapPenanggungJawab",
    "hubunganDenganPenanggungJawab",
    "nomorhpPenanggungJawab",
    "alamatPenanggungJawab",
    "kelurahanPenanggungJawab",
    "kecamatanPenanggungJawab",
];

const {
    Router
} = require("express");
const passport = require("passport");
const router = Router();

router.get("/", (req, res) => {
    // userService.db.ref('contacts').once('value', (snapshot) => {
    //     data = snapshot.val();
    //     res.render('index', {
    //         contacts: data
    //     })
    // });
    res.render("layouts/homepage.ejs");
});

router.get("/signOut", (req, res) => {
    // userService.db.ref('contacts').once('value', (snapshot) => {
    //     data = snapshot.val();
    //     res.render('index', {
    //         contacts: data
    //     })
    // });
    res.render("layouts/homepage.ejs");
});
router.get("/dashboard", (req, res) => {
    res.render("layouts/dashboard.ejs");
});

router.get("/icons", (req, res) => {
    res.render("layouts/icons.ejs");
});

router.get("/maps", (req, res) => {
    res.render("layouts/maps.ejs");
});
router.get("/map", (req, res) => {
    res.render("layouts/map.ejs");
});

router.get("/notifications", (req, res) => {
    res.render("layouts/notifications.ejs");
});

router.get("/rtl", (req, res) => {
    res.render("layouts/rtl.ejs");
});

router.get("/tables", (req, res) => {
    res.render("layouts/tables.ejs");
});

router.get("/typography", (req, res) => {
    res.render("layouts/typography.ejs");
});

router.get("/upgrade", (req, res) => {
    res.render("layouts/upgrade.ejs");
});
router.get("/user", (req, res) => {
    res.render("layouts/user.ejs");
});


router.get("/pengaturan", (req, res) => {
    res.render("layouts/pengaturan.ejs");
});

router.get("/forgot", (req, res) => {
    res.render("layouts/forgot.ejs");
});


router.get("/reset", (req, res) => {
    res.render("layouts/reset.ejs");
});

router.get("/homepage", (req, res) => {
    res.render("layouts/homepage.ejs");
});

router.post("/addData", (req, res) => {
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
    userService.db
        .collection("dataMakam")
        .doc(data.namaLengkapJenazah + "_" + data.bagian)
        .set(data);
    res.redirect("/tables");
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
        listdariobjek.forEach((x) => {
            // console.log(x)
            // console.log(fromKeyMap[x], doc.data()[x])
            map.set(fromKeyMap[x], doc.data()[x]);
        });
        const mapakhir = Object.fromEntries(map);
        obj.rows.push(mapakhir);
    });
    console.log(obj.rows[0]);
    res.send(obj);
});
router.get("/getDataJuri", async (req, res) => {
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
        listdariobjek.forEach((x) => {
            // console.log(x)
            // console.log(fromKeyMap[x], doc.data()[x])
            map.set(fromKeyMap[x], doc.data()[x]);
        });
        const mapakhir = Object.fromEntries(map);
        obj.rows.push(mapakhir);
    });
    console.log(obj.rows[0]);
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
    res.redirect("/login");
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