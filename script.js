
function checkType() {

const input = document.getElementById('userEmail').type
const buttonSubmit = document.getElementById('submitButton')
const inputUser = document.getElementById('userEmail')
const firstName = document.getElementById('userFirstName').type
const inputFirstName = document.getElementById('userFirstName')
const userPhone = document.getElementById('userPhone').type
const inputUserPhone = document.getElementById('userPhone')
const userPassword = document.getElementById('userPassword').type
const inputuserPassword = document.getElementById('userPassword')
const lsatName = document.getElementById('userLastName').type
const inputlastName = document.getElementById('userLastName')

    buttonSubmit.addEventListener('click', function(event) {

    const inputType = input.type;
    const inputType1 = firstName.type;
    const inputType2 = lsatName.type;
    const inputType3 = userPassword.type;
    const inputType4 = userPhone.type;

    if(inputType === 'email' ) {
        console.log('SUCESS')
    } else {
        inputUser.style.border = "1px solid red"
    }

    if(inputType1 === 'text' ) {
        console.log('SUCESS')
    } else {
        inputFirstName.style.border = "1px solid red"
    }

    if(inputType2 === 'text' ) {
        console.log('SUCESS')
    } else {
        inputlastName.style.border = "1px solid red"
    }

    if(inputType3 === 'password' ) {
        console.log('SUCESS')
    } else {
        inputuserPassword.style.border = "1px solid red"
    }

    if( inputType4 === 'number' ) {
        console.log('SUCESS')
    } else {
        inputUserPhone.style.border = "1px solid red"
    }

})

}

checkType()