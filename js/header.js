var signUpModal = document.getElementById('sign-up-modal');
var loginModal = document.getElementById('sign-in-modal');

signUpModal.addEventListener('click', openSignUpModal);
loginModal.addEventListener('click', openLoginModal);

function openLoginModal(){
    document.getElementById('sign-in').style.display = 'flex';
    document.getElementById('main-container-div').style.opacity = 0.5;
}
function openSignUpModal(){
    document.getElementById('sign-up').style.display = 'flex';
    document.getElementById('main-container-div').style.opacity = 0.5;

}