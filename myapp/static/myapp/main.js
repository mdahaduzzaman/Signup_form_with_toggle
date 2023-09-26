let form = document.querySelector('form')

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