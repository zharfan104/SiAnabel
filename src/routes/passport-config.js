const LocalStrategy = require('passport-local').Strategy


const userService = require("./user_services");

// const bcrypt = require('bcrypt')

function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        console.log('asdasdbangsat');
        try {
            console.log(email, password, done);
            const user = await userService.authenticate(email, password);
            console.log('asjdj')
            console.log(user.user.email)

            return done(null, user)
        } catch (err) {
            console.log(err)
            return done(null, false, {
                message: 'Masukkan Akun Salah'
            })
        }
    }
    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.user.email))
    passport.deserializeUser((id, done) => {
        return done(null, id)
    })
}

module.exports = initialize