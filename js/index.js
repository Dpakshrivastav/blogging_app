var signInClose = document.getElementById('sign-in-close');
var signUpClose = document.getElementById('sign-up-close');
signInClose.addEventListener('click', function(){
    close("sign-in");
});
signUpClose.addEventListener('click', function(){
    close("sign-up");
});
function close(id){
    document.getElementById(id).style.display = 'none';
    document.getElementById('main-container-div').style.opacity = 1;    
}