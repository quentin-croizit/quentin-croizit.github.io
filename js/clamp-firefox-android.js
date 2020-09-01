function clamp_grid_size()
 {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var desired_height = Math.min(Math.max(width / 18 * 11, height * 0.1), height * 0.3);
    $('.section').css({
      'grid-template-rows': `1fr 1fr 4fr 1fr ${desired_height}`,
      '-ms-grid-template-rows': `1fr 1fr 4fr 1fr ${desired_height}`,
    });
    console.log("coucou");
    
 }

clamp_grid_size();

window.onresize = clamp_grid_size();

// -ms-grid-rows: 1fr 1fr 4fr 1fr calc(100vw / 18 * 11);
// grid-template-rows: 1fr 1fr 4fr 1fr calc(100vw / 18 * 11);