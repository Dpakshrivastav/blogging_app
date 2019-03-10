var openPosts = document.getElementById('open-posts');
var createPosts = document.getElementById('create-posts');

openPosts.addEventListener('click', function(){
    window.open('html/bloglist.html', '_self');
});
createPosts.addEventListener('click', function(){
    window.open('html/post.html', '_self');
})