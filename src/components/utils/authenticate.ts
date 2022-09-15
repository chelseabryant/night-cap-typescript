var bcrypt = require('bcryptjs')


export function authenticate(email: string, password: string) {
    const hash = localStorage.getItem(email)
    const authenticated: boolean =  bcrypt.compareSync(password, hash)
    if (authenticated) {
        localStorage.setItem('user', email)
        return true
    } else {
        return false
    }
}

export function createAccount(email: string, password: string) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt)
    localStorage.setItem(email, hash)
    localStorage.setItem('user', email)
}