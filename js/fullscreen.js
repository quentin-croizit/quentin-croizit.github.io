function resize()
 {
      var heights = window.innerHeight;
      var widths = window.innerWidth;
      var divs = document.getElementsByClassName("section");
      for(var i = 0 ; i < divs.length ; i++)
         divs[i].style.height = heights + "px";
      for(var i = 0 ; i < divs.length ; i++)
         divs[i].style.width = widths + "px";
 }

resize();

window.onresize = resize;