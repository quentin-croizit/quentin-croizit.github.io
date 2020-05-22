function resize()
 {
    if(isMobile){
        var heights = window.innerHeight;
        var divs = document.getElementsByClassName("section");
        for(var i=0;i<divs.length;i++)
           divs[i].style.height = heights + "px";
    }
 }

isMobile = window.matchMedia("(max-width: 840px)");

resize();

window.onresize = resize;