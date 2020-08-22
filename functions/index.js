const app = require('./app');
const functions = require('firebase-functions');

async function main() {

    await app.listen(3000);
    exports.app = functions.https.onRequest(app);
    console.log('Server on port', 3000);


}

main();