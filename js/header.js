var signUpModal = document.getElementById('open-sign-up-modal');
var loginModal = document.getElementById('open-sign-in-modal');
var signInClose = document.getElementById('sign-in-close');
var signUpClose = document.getElementById('sign-up-close');

signUpModal.addEventListener('click', openSignUpModal);
loginModal.addEventListener('click', openLoginModal);
var modal;
function openLoginModal(){
    modal = document.getElementById('login-modal');
    modal.style.display = 'block';
}
function openSignUpModal(){
    modal = document.getElementById('sign-up-modal');
    modal.style.display = 'block';
}
signInClose.addEventListener('click', function(){
    close("login-modal");
});
signUpClose.addEventListener('click', function(){
    close("sign-up-modal");
});
function close(id){
    document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
