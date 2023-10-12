
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', function(){
    nav.classList.toggle('active')
})

function showConfirmation() {
    var confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = "Your interests have been submitted";
    setTimeout(function() {
        confirmationMessage.innerHTML = ''; // Clear the message
    }, 5000);
    return false;
}
