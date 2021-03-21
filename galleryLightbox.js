var lightbox = document.getElementsByClassName('lightbox')[0];
var lightbox_image = lightbox.children[0];
var lightbox_blocker = lightbox.children[1];
var images = document.getElementsByClassName('gallery-images')[0].children;

lightbox_blocker.addEventListener('click',blockerOnClick);
for(var i = 0 ; i < images.length ; i++) {
    images[i].addEventListener('click',imageOnClick);
}

console.log(lightbox, lightbox_image, lightbox_blocker);

function imageOnClick(){
    console.log("click-image");

    lightbox_image.src = this.src;
    lightbox.classList.remove('deactivated');
    lightbox_image.classList.remove('deactivated');
    lightbox_blocker.classList.remove('deactivated');

    //Disables scrolling
    document.body.setAttribute('style', 'overflow: hidden;');
}

function blockerOnClick(){
    console.log("click-blocker");
    
    lightbox.classList.add('deactivated');
    lightbox_image.classList.add('deactivated');
    lightbox_blocker.classList.add('deactivated');

    //Re-enables scrolling
    document.body.setAttribute('style', 'overflow: auto;');
}