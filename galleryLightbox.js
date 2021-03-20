var blocker = document.getElementsByClassName('lightbox-blocker')[0];
var images = document.getElementsByClassName('gallery-images')[0].children;

blocker.addEventListener('click',blockerOnClick);
for(var i = 0 ; i < images.length ; i++) {
    images[i].addEventListener('click',imageOnClick);
}

function imageOnClick(){
    this.classList.add('lightbox');
    blocker.classList.add('lightbox-cover');
    //Disables scrolling
    document.body.setAttribute('style', 'overflow: hidden;');
}

function blockerOnClick(){
    console.log("click-blocker");
    document.getElementsByClassName('lightbox')[0].classList.remove('lightbox');
    blocker.classList.remove('lightbox-cover');
    //Re-enables scrolling
    document.body.setAttribute('style', 'overflow: auto;');
}