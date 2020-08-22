const app = require('./app');

async function main() {
    await app.listen(process.env.PORT || 3000);
    console.log('Server on port', 3000);
}

main();