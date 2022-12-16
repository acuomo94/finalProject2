var firstName = document.getElementById('firstName')
var firstnameError = document.getElementById('fnError')
var lastName = document.getElementById('lastName')
var lastnameError = document.getElementById('lnError')
var email = document.getElementById('email')
var emailError = document.getElementById('emailError')
var password = document.getElementById('password')
var pswdError = document.getElementById('pswdError')
var form = document.getElementById('form')


// First name validation
form.addEventListener('submit', (e) =>{
    let messages = []
    if (firstName.value == '') {
        messages.push('First name is required!')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        firstnameError.innerText = messages.join(', ')
        
    } 
    return true
    
})

// Last name validation
form.addEventListener('submit', (e) =>{
    let messages = []
    if (lastName.value == '') {
        messages.push('Last name is required!')
    }

    if (messages.length > 0) {
        e.preventDefault()
        lastnameError.innerText = messages.join(', ')
    }
})

// Email validation
form.addEventListener('submit', (e) =>{
    let messages = []
    if (email.value == '') {
        messages.push('Email is required!')
    }

    if (messages.length > 0) {
        e.preventDefault()
        emailError.innerText = messages.join(', ')
    }
})

// Password validation
form.addEventListener('submit', (e) =>{
    let messages = []
    if (password.value == '') {
        messages.push('Password is required!')
    }

    if (password.value.length < 6) {
        messages.push('Password must be longer than 6 characters!')
    }

    if (messages.length > 0) {
        e.preventDefault()
        pswdError.innerText = messages.join(', ')
    }
})

// Back up code with error alerts instead of messages being pushed



// SlideShow




