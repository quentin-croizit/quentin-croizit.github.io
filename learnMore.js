var cell = document.getElementsByClassName('item');

console.log(cell.length);

for(var i = 0 ; i < cell.length ; i++) {
    cell[i].addEventListener('mouseover',onHover);
    cell[i].addEventListener('mouseout',onOut);
    cell[i].children[0].setAttribute('style', 'transform: scale(1); border-radius: 1rem;');
    cell[i].children[2].setAttribute('style', 'transform: scale(0.75); opacity: 0.5;');
    cell[i].style.background = "linear-gradient( to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2))";
}

function onHover(){
    if(screen.width >= 1280) {
    this.children[0].setAttribute('style', 'transform: scale(1.1); border-radius: 1.75rem;');
    this.children[2].setAttribute('style', 'transform: scale(1.05); opacity: 1;');
    this.style.background = "linear-gradient(to right bottom,#42669630,#658ec630)";
}}

function onOut(){
    if(screen.width >= 1280) {
    this.children[0].setAttribute('style', 'transform: scale(1); border-radius: 1rem;');
    this.children[2].setAttribute('style', 'transform: scale(0.75); opacity: 0.5;');
    this.style.background = "linear-gradient( to right bottom,rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0.2))";
}}

