// The Token Manager: You are developing a user authentication system,
//  and you need to manage user authentication tokens. 
// Implement a function named setAuthToken that takes an authentication 
// token and sets it in localStorage with an expiration time.

function setAuthToken(token) {
    localStorage.setItem('authToken', JSON.stringify({token, expires: Date.now() + 3600000 }));
}

setAuthToken(Math.random().toString(36).substring(2, 15))

function getAuthToken() {
    let data = JSON.parse(localStorage.getItem('authToken'))
    if (data && data.expires > Date.now()) {
        return data.token
    } 
    else {
        localStorage.removeItem('authToken')
        return null
    }
}

console.log(getAuthToken())
