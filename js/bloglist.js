var modal;
function deleteFunc(id){
    modal = document.getElementById("delete-post");
    modal.style.display='block';
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}