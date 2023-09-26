let form = document.querySelector('.form')
 
let isSupplier = document.getElementById('isSupplier')

let visibleField = document.getElementById('visibleField')
// Initially hide the 
visibleField.style.display = 'none';

isSupplier.addEventListener('click', () => {
    if (isSupplier.checked) {
        visibleField.classList.remove('fade-out')
        visibleField.classList.add('fade-me')
        visibleField.style.display = 'block'; // Show the tin element
    } else {
        visibleField.classList.remove('fade-me')
        visibleField.classList.add('fade-out')
        setTimeout(()=>{
            visibleField.style.display = 'none'; // Hide the tin element
        }, 500)
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    password1 = document.getElementById('password1')
    password2 = document.getElementById('password2')

    if(password1.value != password2.value){
        const div = document.querySelector('.repeatPassword')
        div.innerText = "Password did not match!"
        password2.value = ''
    }else{
        alert("Match", password1.value, password2.value)
    }
});