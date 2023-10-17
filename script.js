const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')

const warning = document.createElement('p')
warning.textContent = '* Passwords do not match'
warning.classList.toggle('texterror')




password1.addEventListener('input', function() {
if (!(password1.value === password2.value)) {

    password1.parentElement.appendChild(warning)
    password1.classList.add('error')
    password2.classList.add('error')
} else {
    password1.parentElement.removeChild(warning)
    password1.classList.remove('error')
    password2.classList.remove('error')
}
})

password2.addEventListener('input', function() {
    if (!(password1.value === password2.value)) {

        password1.parentElement.appendChild(warning)
        password1.classList.add('error')
        password2.classList.add('error')
    } else {
        password1.parentElement.removeChild(warning)
        password1.classList.remove('error')
        password2.classList.remove('error')

    }
    })
