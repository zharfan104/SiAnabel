const firebase = require("firebase/app");
require("firebase/auth");
const admin = require("firebase-admin");


var serviceAccount = require("../../fitto-ecadd-firebase-adminsdk-3wctg-aaa78a7651.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fitto-ecadd.firebaseio.com",
});

const fb = firebase.initializeApp({
    apiKey: "AIzaSyCd6l2-N7zmeisTPOeeq-MX0mPAyCy3QhE",
    authDomain: "fitto-ecadd.firebaseapp.com",
    databaseURL: "https://fitto-ecadd.firebaseio.com",
    projectId: "fitto-ecadd",
    storageBucket: "fitto-ecadd.appspot.com",
    messagingSenderId: "150612506085",
    appId: "1:150612506085:web:addbf7588e695b08602b0c"
});


exports.db = admin.firestore();

exports.serverTimestamp = admin.firestore.FieldValue.serverTimestamp;

exports.addUser = (email, password) =>
    fb.auth().createUserWithEmailAndPassword(email, password);
exports.authenticate = (email, password) =>
    fb.auth().signInWithEmailAndPassword(email, password);