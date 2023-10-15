
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', function(){
    nav.classList.toggle('active')
})

function showConfirmation() {
  const toasts = document.getElementById('toasts');

  const message = "Your interests have been submitted.";

  const notif = document.createElement('div');
  
  notif.classList.add('toast');

  notif.innerText = message;

  toasts.appendChild(notif);

  setTimeout(() => {
      notif.remove()
  }, 3000);

  return false;
}